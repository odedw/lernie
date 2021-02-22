import { Input } from 'rmidi';
import { config } from '../config/parameterConfig';
import { SourceState, Parameter, MidiCCBinding, SourceMapping, SourceType } from '../types';
import run from './run';
import { state } from './state';
import { generateDefaultSourceState } from './state/defaultSourceState';
import mapping from '../config/LaunchControlXL';
import { Subscription } from 'rxjs';

let subscriptions: Subscription[] = [];
let input = Input.create('Launch Control XL');
function bindParameter(i: Input, mapping: MidiCCBinding, p: Parameter, ss: SourceState) {
  return i.ccBind<Record<Parameter, number>>(
    mapping.cc,
    p,
    ss.parameters,
    config.parameters[p].min,
    config.parameters[p].max
  );
}

function bindMod(i: Input, mapping: MidiCCBinding, p: 'mod1' | 'mod2' | 'mod3', ss: SourceState) {
  return i.cc(mapping.cc, mapping.channel).subscribe((e) => {
    const { min, max } = config.sourceMods[ss.sourceType][p];
    const unit = (max - min) / 127;
    ss.parameters[p] = min + unit * e.value;
  });
}

function bindSource(i: Input, mapping: SourceMapping, ss: SourceState) {
  const subs = Object.keys(ss.parameters).map((k) => {
    const key = k as Parameter;
    if (key === 'mod1' || key === 'mod2' || key === 'mod3') {
      return bindMod(i, mapping.parameters[key], key, ss);
    } else {
      return bindParameter(i, mapping.parameters[key], key, ss);
    }
  });

  // switch source
  subs.push(
    i.noteOn(mapping.switchSource.note, mapping.switchSource.channel).subscribe(() => {
      ss.sourceType = ((Number(ss.sourceType) + 1) % Object.keys(SourceType).length) as SourceType;
      const defaultParams = generateDefaultSourceState(ss.sourceType).parameters;
      Object.keys(ss.parameters).forEach((p) => (ss.parameters[p as Parameter] = defaultParams[p as Parameter]));
      run();
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
      run();
    })
  );

  return subs;
}

export default function setup() {
  // clear previous setup
  subscriptions.forEach((s) => s.unsubscribe());

  //midi
  // listInputs();
  input.then((i) => {
    subscriptions = [
      ...bindSource(i, mapping.sources[0], state.sources[0]),
      ...bindSource(i, mapping.sources[1], state.sources[1]),
    ];
  });
}
