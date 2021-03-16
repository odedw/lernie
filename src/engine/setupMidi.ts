import { Input } from 'rmidi';
import { config } from '../config/parameterConfig';
import { Parameter, MidiCCBinding, SourceMapping, SourceType } from '../types';
import mapping from '../config/LaunchControlXL';
import { Subscription, merge } from 'rxjs';
import streams from './streams';
import { filter, map } from 'rxjs/operators';
import { Key, KeyState } from '../types/Keys';

let sourceSubscriptions: Subscription[] = [];
let input = Input.create('Launch Control XL');

function bindParameter(
  i: Input,
  sourceIndex: number,
  mapping: MidiCCBinding,
  p: Parameter,
  getSourceType: (i: number) => SourceType,
  keyState: KeyState
) {
  return i.cc(mapping.cc, mapping.channel).subscribe((e) => {
    if (keyState.audio) {
      
    } else if (keyState.lfo1 || keyState.lfo2) {
      const lfoIndex = keyState.lfo1 ? 0 : 1;
      // send LFO to param
      const value = -1 + (2 * e.value) / 127; // always between -1 and 1
      streams.lfoDestinationValueChange.next({ value, parameter: p, sourceIndex, lfoIndex });
    } else {
      const { min, max } = // mod1/2/3 change between source types
        p === 'mod1' || p === 'mod2' || p === 'mod3'
          ? config.sourceMods[getSourceType(sourceIndex)][p]
          : config.parameters[p];
      const unit = (max - min) / 127;
      const value = min + unit * e.value;
      streams.parameterValueChange.next({ value, parameter: p, sourceIndex });
    }
  });
}

function bindSource(
  i: Input,
  getSourceType: (i: number) => SourceType,
  sourceIndex: number,
  mapping: SourceMapping,
  keyState: KeyState
) {
  const subs = Object.keys(mapping.parameters).map((k) => {
    const key = k as Parameter;
    return bindParameter(i, sourceIndex, mapping.parameters[key], key, getSourceType, keyState);
  });
  return subs;
}

export function setupSources(getSourceType: (i: number) => SourceType, keyState: KeyState): Promise<void> {
  // clear previous setup
  sourceSubscriptions.forEach((s) => s.unsubscribe());

  // listInputs();
  return input.then((i) => {
    // reset
    streams.resetSource = merge(
      ...mapping.sources.map((mapping, index) =>
        i.noteOn(mapping.reset.note, mapping.reset.channel).pipe(map(() => index))
      )
    );

    // switchSource
    streams.sourceTypeChange = merge(
      ...mapping.sources.map((mapping, index) =>
        i.noteOn(mapping.switchSource.note, mapping.switchSource.channel).pipe(map(() => index))
      )
    );

    sourceSubscriptions = [
      ...bindSource(i, getSourceType, 0, mapping.sources[0], keyState),
      ...bindSource(i, getSourceType, 1, mapping.sources[1], keyState),
    ];

    // debug
    // i.noteOn().subscribe((e) => {
    //   console.log(`${e.note.name}${e.note.octave}`);
    // });
  });
}

const isNoteMatch = (p: { note: string; channel?: number }, e: { note: { name: any; octave: any }; channel: any }) =>
  p.note === `${e.note.name}${e.note.octave}` && (!p.channel || p.channel === e.channel);

export function setupPresets(state: KeyState): Promise<void> {
  return input.then((i) => {
    const noteOn = i.noteOn();
    const allKeys = Object.keys(mapping.keys).map((k) => k as Key);

    streams.keyDown = noteOn.pipe(
      filter((e) => allKeys.some((k) => isNoteMatch(mapping.keys[k], e))),
      map((e) => allKeys.find((k) => isNoteMatch(mapping.keys[k], e))!)
    );
    streams.keyUp = i.noteOff().pipe(
      filter((e) => allKeys.some((k) => isNoteMatch(mapping.keys[k], e))),
      map((e) => allKeys.find((k) => isNoteMatch(mapping.keys[k], e))!)
    );
    streams.loadPreset = noteOn.pipe(
      filter((e) => mapping.presets.some((p) => isNoteMatch(p, e))),
      map((e) => mapping.presets.findIndex((p) => isNoteMatch(p, e)))
    );
    streams.savePreset = noteOn.pipe(
      filter((e) => state.shift && mapping.presets.some((p) => isNoteMatch(p, e))),
      map((e) => mapping.presets.findIndex((p) => isNoteMatch(p, e)))
    );
  });
}
