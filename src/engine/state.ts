import { config } from '../config/parameterConfig';
import { SourceState, SourceType, Parameter } from '../types';
import { generateDefaultSourceState } from './state/defaultSourceState';

export class State {
  sources: SourceState[] = [
    generateDefaultSourceState(SourceType.osc),
    generateDefaultSourceState(SourceType.osc, false),
  ];

  presets: SourceState[][] = [];

  randomize() {
    Object.keys(this.sources[0].parameters).forEach((k) => {
      if (k.startsWith('modulate')) {
        return;
      }
      if (Math.random() < 0.5) {
        const key = k as Parameter;
        this.sources[0].parameters[key] =
          Math.random() * (config.parameters[key].max - config.parameters[key].min + 1) + config.parameters[key].min;
        this.sources[1].parameters[key] =
          Math.random() * (config.parameters[key].max - config.parameters[key].min + 1) + config.parameters[key].min;
      }
    });
  }
}
let state = new State();
export const setState = (newState: State) => (state = newState);
export { state };
