import { Input } from 'rmidi';
import { config } from '../config/parameterConfig';
import { generateKeyRecord, Parameter, SourceType } from '../types';
import mapping from '../config/LaunchControlXL';
import { merge } from 'rxjs';
import streams, {
  ClearParameterEvent,
  LfoDestinationValueChange,
  LFORateChangeEvent,
  LFOTypeChangeEvent,
  ParameterValueChangeEvent,
} from './streams';
import { filter, map } from 'rxjs/operators';
import { allKeys, Key, KeyState } from '../types/Keys';
import { InputEventControlchange } from 'webmidi';
import { LFOType } from './LFO';
import { lfoConfig } from '../config/lfoConfig';

// let input = Input.create('Launch Control XL');

const isNoteMatch = (p: { note: string; channel?: number }, e: { note: { name: any; octave: any }; channel: any }) =>
  p.note === `${e.note.name}${e.note.octave}` && (!p.channel || p.channel === e.channel);

const keyStateMatches = (ks: KeyState, keys: Record<Key, boolean> = generateKeyRecord()): boolean => {
  return allKeys.every((k) => keys[k] === ks[k]);
};

export function setupMidi(
  inputName: string,
  getSourceType: (i: number) => SourceType,
  keyState: KeyState
): Promise<void> {
  let input = Input.create(inputName);

  const allParameters = Object.keys(mapping.sources[0].parameters).map((k) => k as Parameter);
  console.log(`===========================setupMidi`);

  // listInputs();
  return input.then((i) => {
    // reset
    streams.resetSource$ = merge(
      ...mapping.sources.map((mapping, index) =>
        i.noteOn(mapping.reset.note, mapping.reset.channel).pipe(
          filter(() => !keyState.audio),
          map(() => index)
        )
      )
    );

    streams.selectAudioBin$ = merge(
      ...mapping.sources.map((mapping, index) =>
        i.noteOn(mapping.switchSource.note, mapping.switchSource.channel).pipe(
          filter(() => keyState.audio),
          map(() => index)
        )
      )
    );

    // switchSource
    streams.sourceTypeChange$ = merge(
      ...mapping.sources.map((mapping, index) =>
        i.noteOn(mapping.switchSource.note, mapping.switchSource.channel).pipe(
          filter(() => keyStateMatches(keyState, generateKeyRecord())),
          map(() => index)
        )
      )
    );
    const ccObservables = mapping.sources
      .map((m, sourceIndex) =>
        allParameters.map((p) =>
          i.cc(m.parameters[p].cc, m.parameters[p].channel).pipe(map((e) => ({ e, sourceIndex, p, m })))
        )
      )
      .flatMap((a) => a);

    // LFOs
    streams.lfoDestinationValueChange$ = merge(
      ...ccObservables.map((o) =>
        o.pipe(
          filter(
            () =>
              keyStateMatches(keyState, generateKeyRecord(['lfo1'])) ||
              keyStateMatches(keyState, generateKeyRecord(['lfo2']))
          ),
          map(({ e, sourceIndex, p }) => {
            const lfoIndex = keyState.lfo1 ? 0 : 1;
            // // send LFO to param
            const value = -1 + (2 * e.value) / 127; // between -1 and 1
            return { value, parameter: p, sourceIndex, lfoIndex } as LfoDestinationValueChange;
          })
        )
      )
    );

    // Parameter change
    streams.parameterValueChange$ = merge(
      ...ccObservables.map((o) =>
        o.pipe(
          filter(() => keyStateMatches(keyState)),

          map(({ e, sourceIndex, p }) => {
            const {
              min,
              max,
            } = // mod1/2/3 change between source types
              p === 'mod1' || p === 'mod2' || p === 'mod3'
                ? config.sourceMods[getSourceType(sourceIndex)][p]
                : config.parameters[p];
            const unit = (max - min) / 127;
            const value = min + unit * e.value;
            return { value, parameter: p, sourceIndex } as ParameterValueChangeEvent;
          })
        )
      )
    );

    // Audio reactivity
    streams.audioDestinationValueChange$ = merge(
      ...ccObservables.map((o) =>
        o.pipe(
          filter(() => keyState.audio && !keyState.shift),
          map(({ e, sourceIndex, p }) => {
            const value = e.value / 127; // between 0 and 1
            return { value, parameter: p, sourceIndex } as LfoDestinationValueChange;
          })
        )
      )
    );

    // Clear parameter
    streams.clearParameter$ = merge(
      ...ccObservables.map((o) =>
        o.pipe(
          filter(() => keyState.shift),
          map(({ sourceIndex, p }) => {
            const destination = keyState.lfo1 ? 'lfo1' : keyState.lfo2 ? 'lfo2' : keyState.audio ? 'audio' : null;
            return { parameter: p, sourceIndex, destination } as ClearParameterEvent;
          })
        )
      )
    );
    // lfo control
    const numOfLfoTypes = Object.keys(LFOType).length / 2;
    const divisor = 128 / numOfLfoTypes;
    streams.lfoTypeChange$ = merge(
      ...mapping.lfosControl.map((control, lfoIndex) =>
        i
          .cc(control.type.cc, control.type.channel)
          .pipe(
            map<InputEventControlchange, LFOTypeChangeEvent>((e) => ({ lfoIndex, type: Math.floor(e.value / divisor) }))
          )
      )
    );

    streams.lfoRateChange$ = merge(
      ...mapping.lfosControl.map((control, lfoIndex) =>
        i.cc(control.rate.cc, control.rate.channel).pipe(
          map<InputEventControlchange, LFORateChangeEvent>((e) => ({
            lfoIndex,
            rate: lfoConfig.rate.min + Math.floor(((lfoConfig.rate.max - lfoConfig.rate.min) * e.value) / 127),
          }))
        )
      )
    );

    // keys
    const noteOn = i.noteOn();
    const allKeys = Object.keys(mapping.keys).map((k) => k as Key);

    streams.keyDown$ = noteOn.pipe(
      filter((e) => allKeys.some((k) => isNoteMatch(mapping.keys[k], e))),
      map((e) => allKeys.find((k) => isNoteMatch(mapping.keys[k], e))!)
    );
    streams.keyUp$ = i.noteOff().pipe(
      filter((e) => allKeys.some((k) => isNoteMatch(mapping.keys[k], e))),
      map((e) => allKeys.find((k) => isNoteMatch(mapping.keys[k], e))!)
    );
    streams.loadPreset$ = noteOn.pipe(
      filter((e) => mapping.presets.some((p) => isNoteMatch(p, e))),
      map((e) => mapping.presets.findIndex((p) => isNoteMatch(p, e)))
    );
    streams.savePreset$ = noteOn.pipe(
      filter((e) => keyState.shift && mapping.presets.some((p) => isNoteMatch(p, e))),
      map((e) => mapping.presets.findIndex((p) => isNoteMatch(p, e)))
    );

    // debug
    // i.noteOn().subscribe((e) => {
    //   console.log(`${e.note.name}${e.note.octave}`);
    // });
  });
}
