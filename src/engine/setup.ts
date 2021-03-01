import { Input } from 'rmidi';
import { config } from '../config/parameterConfig';
import { SourceState, Parameter, MidiCCBinding, SourceMapping, SourceType, State } from '../types';
import { generateDefaultSourceState } from './state/defaultSourceState';
import mapping from '../config/LaunchControlXL';
import { Subscription } from 'rxjs';
import ScopeSubjects from './ScopeSubjects';

let sourceSubscriptions: Subscription[] = [];
let input = Input.create('Launch Control XL');
function bindParameter(i: Input, mapping: MidiCCBinding, p: Parameter, ss: SourceState, subjects: ScopeSubjects) {
  return i.cc(mapping.cc, mapping.channel).subscribe((e) => {
    const { min, max } = config.parameters[p];
    const unit = (max - min) / 127;
    ss.parameters[p] = min + unit * e.value;

    subjects.parameterChange.next({ value: ss.parameters[p], parameter: p });
  });
}

function bindMod(
  i: Input,
  mapping: MidiCCBinding,
  p: 'mod1' | 'mod2' | 'mod3',
  ss: SourceState,
  subjects: ScopeSubjects
) {
  return i.cc(mapping.cc, mapping.channel).subscribe((e) => {
    const { min, max } = config.sourceMods[ss.sourceType][p];
    const unit = (max - min) / 127;
    ss.parameters[p] = min + unit * e.value;

    subjects.parameterChange.next({ value: ss.parameters[p], parameter: p });
  });
}

function bindSource(
  i: Input,
  mapping: SourceMapping,
  ss: SourceState,
  refreshState: () => void,
  subjects: ScopeSubjects
) {
  const subs = Object.keys(ss.parameters).map((k) => {
    const key = k as Parameter;
    if (key === 'mod1' || key === 'mod2' || key === 'mod3') {
      return bindMod(i, mapping.parameters[key], key, ss, subjects);
    } else {
      return bindParameter(i, mapping.parameters[key], key, ss, subjects);
    }
  });

  // switch source
  subs.push(
    i.noteOn(mapping.switchSource.note, mapping.switchSource.channel).subscribe(() => {
      ss.sourceType = ((Number(ss.sourceType) + 1) % Object.keys(SourceType).length) as SourceType;
      const defaultParams = generateDefaultSourceState(ss.sourceType).parameters;
      Object.keys(ss.parameters).forEach((p) => (ss.parameters[p as Parameter] = defaultParams[p as Parameter]));
      refreshState();

      subjects.sourceTypeChange.next(ss.sourceType);
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
      refreshState();
    })
  );

  return subs;
}

export function setupSources(state: State, refreshState: () => void, subjects: ScopeSubjects) {
  // clear previous setup
  sourceSubscriptions.forEach((s) => s.unsubscribe());

  //midi
  // listInputs();
  input.then((i) => {
    sourceSubscriptions = [
      ...bindSource(i, mapping.sources[0], state.sources[0], refreshState, subjects),
      ...bindSource(i, mapping.sources[1], state.sources[1], refreshState, subjects),
    ];

    // debug
    // subscriptions.push(
    //   i.noteOn().subscribe((e) => {
    //     console.log(`${e.note.name}${e.note.octave}`);
    //   })
    // );
  });
}

export function setupPresets(state: State, savePreset: (index: number) => void, loadPreset: (index: number) => void) {
  input.then((i) => {
    i.noteOn(mapping.shift.note, mapping.shift.channel).subscribe(() => {
      state.shift = true;
    });
    i.noteOff(mapping.shift.note, mapping.shift.channel).subscribe(() => {
      state.shift = false;
    });
    mapping.presets.forEach((preset, index) => {
      i.noteOn(preset.note, preset.channel).subscribe(() => {
        if (state.shift) {
          savePreset(index);
        } else {
          loadPreset(index);
        }
      });
    });
  });
}
