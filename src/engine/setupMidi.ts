import { Input } from 'rmidi';
import { config } from '../config/parameterConfig';
import { Parameter, MidiCCBinding, SourceMapping, SourceType, State, SourceTypeValues } from '../types';
import { generateDefaultSourceState } from './state/defaultSourceState';
import mapping from '../config/LaunchControlXL';
import { Subscription } from 'rxjs';
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
  s: State,
  keyState: KeyState
) {
  return i.cc(mapping.cc, mapping.channel).subscribe((e) => {
    const ss = s.sources[sourceIndex];
    if (keyState.lfo1 || keyState.lfo2) {
      const lfoIndex = keyState.lfo1 ? 0 : 1;
      const lfoParameters = ss.lfos[lfoIndex];
      // send LFO to param
      lfoParameters[p] = -1 + (2 * e.value) / 127; // always between -1 and 1
      streams.lfoChange.next({ value: lfoParameters[p], parameter: p, sourceIndex, lfoIndex });
    } else {
      const { min, max } = // mod1/2/3 change between source types
        p === 'mod1' || p === 'mod2' || p === 'mod3' ? config.sourceMods[ss.sourceType][p] : config.parameters[p];
      const unit = (max - min) / 127;
      ss.parameters[p] = min + unit * e.value;
      streams.parameterChange.next({ value: ss.parameters[p], parameter: p, sourceIndex });
    }
  });
}

function bindSource(i: Input, s: State, sourceIndex: number, mapping: SourceMapping, keyState: KeyState) {
  const ss = s.sources[sourceIndex];
  const subs = Object.keys(ss.parameters).map((k) => {
    const key = k as Parameter;
    return bindParameter(i, sourceIndex, mapping.parameters[key], key, s, keyState);
  });

  // switch source
  subs.push(
    i.noteOn(mapping.switchSource.note, mapping.switchSource.channel).subscribe(() => {
      ss.sourceType = ((Number(ss.sourceType) + 1) % SourceTypeValues.length) as SourceType;

      const defaultParams = generateDefaultSourceState(ss.sourceType).parameters;
      Object.keys(ss.parameters)
        .filter((p) => !['blend', 'diff'].includes(p))
        .forEach((p) => (ss.parameters[p as Parameter] = defaultParams[p as Parameter]));

      streams.sourceTypeChange.next({ type: ss.sourceType, sourceIndex });
    })
  );

  // reset
  subs.push(
    i.noteOn(mapping.reset.note, mapping.reset.channel).subscribe(() => {
      const defaultState = generateDefaultSourceState(ss.sourceType);
      // copy parameters default state
      Object.keys(ss.parameters).forEach((k) => {
        const key = k as Parameter;
        ss.parameters[key] = defaultState.parameters[key];
        ss.lfos.forEach((lfo) => (lfo[key] = 0));
      });
    })
  );

  return subs;
}

export function setupSources(state: State, keyState: KeyState): Promise<void> {
  // clear previous setup
  sourceSubscriptions.forEach((s) => s.unsubscribe());

  //midi
  // listInputs();
  return input.then((i) => {
    sourceSubscriptions = [
      ...bindSource(i, state, 0, mapping.sources[0], keyState),
      ...bindSource(i, state, 1, mapping.sources[1], keyState),
    ];

    // debug
    // i.noteOn().subscribe((e) => {
    //   console.log(`${e.note.name}${e.note.octave}`);
    // });
  });
}

const isMatch = (p: { note: string; channel?: number }, e: { note: { name: any; octave: any }; channel: any }) =>
  p.note === `${e.note.name}${e.note.octave}` && (!p.channel || p.channel === e.channel);

export function setupPresets(state: KeyState): Promise<void> {
  return input.then((i) => {
    const noteOn = i.noteOn();
    const allKeys = Object.keys(mapping.keys).map((k) => k as Key);

    streams.keyDown = noteOn.pipe(
      filter((e) => allKeys.some((k) => isMatch(mapping.keys[k], e))),
      map((e) => allKeys.find((k) => isMatch(mapping.keys[k], e))!)
    );
    streams.keyUp = i.noteOff().pipe(
      filter((e) => allKeys.some((k) => isMatch(mapping.keys[k], e))),
      map((e) => allKeys.find((k) => isMatch(mapping.keys[k], e))!)
    );
    streams.loadPreset = noteOn.pipe(
      filter((e) => mapping.presets.some((p) => isMatch(p, e))),
      map((e) => mapping.presets.findIndex((p) => isMatch(p, e)))
    );
    streams.savePreset = noteOn.pipe(
      filter((e) => state.shift && mapping.presets.some((p) => isMatch(p, e))),
      map((e) => mapping.presets.findIndex((p) => isMatch(p, e)))
    );
  });
}
