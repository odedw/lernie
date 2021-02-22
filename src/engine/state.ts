import { SourceState, SourceMapping, SourceType } from '../types';
import { generateDefaultSourceState } from './state/defaultSourceState';

export class State {
  sources: SourceState[] = [
    generateDefaultSourceState(SourceType.osc),
    generateDefaultSourceState(SourceType.osc, false),
  ];

  randomize(mapping: SourceMapping) {
    // Object.keys(defaultSourceState.parameters).forEach((k) => {
    //   if (Math.random() < 0.5) {
    //     const key = k as Parameter;
    //     this.sources[0].parameters[key] =
    //       Math.random() * (mapping.parameters[key].max - mapping.parameters[key].min + 1) + mapping.parameters[key].min;
    //     this.sources[1].parameters[key] =
    //       Math.random() * (mapping.parameters[key].max - mapping.parameters[key].min + 1) + mapping.parameters[key].min;
    //   }
    // });
    // this.sources[0].parameters.modulate = 0;
    // this.sources[1].parameters.modulate = 0;
  }
}
let state = new State();
export const setState = (newState: State) => (state = newState);
export { state };
