import { Input } from 'rmidi';
import { config } from '../config/parameterConfig';
import { Parameter, MidiCCBinding, SourceMapping, SourceType, State, SourceTypeValues } from '../types';
import { generateDefaultSourceState } from './state/defaultSourceState';
import mapping from '../config/LaunchControlXL';
import { Subscription } from 'rxjs';
import Streams from './Streams';

let sourceSubscriptions: Subscription[] = [];
let input = Input.create('Launch Control XL');

function bindParameter(
  i: Input,
  sourceIndex: number,
  mapping: MidiCCBinding,
  p: Parameter,
  s: State,
  subjects: Streams,
  isLfoPressed: () => boolean
) {
  return i.cc(mapping.cc, mapping.channel).subscribe((e) => {
    const ss = s.sources[sourceIndex];
    if (isLfoPressed()) {
      // send LFO to param
      ss.lfo[p] = e.value / 127; // always between 0 and 1
      subjects.lfoChange.next({ value: ss.lfo[p], parameter: p, sourceIndex });
    } else {
      const { min, max } = // mod1/2/3 change between source types
        p === 'mod1' || p === 'mod2' || p === 'mod3' ? config.sourceMods[ss.sourceType][p] : config.parameters[p];
      const unit = (max - min) / 127;
      ss.parameters[p] = min + unit * e.value;
      subjects.parameterChange.next({ value: ss.parameters[p], parameter: p, sourceIndex });
    }
  });
}

function bindSource(
  i: Input,
  s: State,
  sourceIndex: number,
  mapping: SourceMapping,
  refreshState: () => void,
  subjects: Streams
) {
  const ss = s.sources[sourceIndex];
  const subs = Object.keys(ss.parameters).map((k) => {
    const key = k as Parameter;
    return bindParameter(i, sourceIndex, mapping.parameters[key], key, s, subjects, () => s.lfo1);
  });

  // switch source
  subs.push(
    i.noteOn(mapping.switchSource.note, mapping.switchSource.channel).subscribe(() => {
      ss.sourceType = ((Number(ss.sourceType) + 1) % SourceTypeValues.length) as SourceType;

      const defaultParams = generateDefaultSourceState(ss.sourceType).parameters;
      Object.keys(ss.parameters)
        .filter((p) => !['blend', 'diff'].includes(p))
        .forEach((p) => (ss.parameters[p as Parameter] = defaultParams[p as Parameter]));
      // refreshState();

      subjects.sourceTypeChange.next({ type: ss.sourceType, sourceIndex });
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
      });
    })
  );

  return subs;
}

export function setupSources(state: State, refreshState: () => void, subjects: Streams) {
  // clear previous setup
  sourceSubscriptions.forEach((s) => s.unsubscribe());

  //midi
  // listInputs();
  input.then((i) => {
    sourceSubscriptions = [
      ...bindSource(i, state, 0, mapping.sources[0], refreshState, subjects),
      ...bindSource(i, state, 1, mapping.sources[1], refreshState, subjects),
    ];

    // debug
    // i.noteOn().subscribe((e) => {
    //   console.log(`${e.note.name}${e.note.octave}`);
    // });
  });
}

function bindBoolean(i: Input, state: State, k: 'lfo1' | 'shift', note: string, channel?: number): Subscription[] {
  return [
    i.noteOn(mapping[k].note, mapping[k].channel).subscribe(() => {
      state[k] = true;
      // console.log(`${k} down`);
    }),
    i.noteOff(mapping[k].note, mapping[k].channel).subscribe(() => {
      state[k] = false;
      // console.log(`${k} up`);
    }),
  ];
}

export function setupPresets(
  state: State,
  savePreset: (index: number) => void,
  loadPreset: (index: number) => void,
  subjects: Streams
) {
  input.then((i) => {
    bindBoolean(i, state, 'shift', mapping.shift.note, mapping.shift.channel);
    bindBoolean(i, state, 'lfo1', mapping.lfo1.note, mapping.lfo1.channel);
    mapping.presets.forEach((preset, index) => {
      i.noteOn(preset.note, preset.channel).subscribe(() => {
        if (state.shift) {
          savePreset(index);
          subjects.savePreset.next(index);
        } else {
          loadPreset(index);
          subjects.loadPreset.next(index);
        }
      });
    });
  });
}
