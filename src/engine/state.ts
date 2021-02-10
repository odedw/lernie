import { Parameter, SourceMapping } from '../types/mapping';
import { SourceState } from '../types/state';

const defaultSourceState: SourceState = {
  parameters: {
    mod1: 40,
    mod2: 0,
    mod3: 0,
    rotation: 0,
    kaleid: 1,
    pixelate: 1500,
    scale: 1,
    colorama: 0,
    modulate: 0,
    modulateRotate: 0,
    blend: 0,
    diff: 0,
  },
  sourceType: 'osc',
};
export class State {
  sources: SourceState[] = [{ ...defaultSourceState }, { ...defaultSourceState }];

  randomize(mapping: SourceMapping) {
    Object.keys(defaultSourceState.parameters).forEach((k) => {
      if (Math.random() < 0.5) {
        const key = k as Parameter;
        this.sources[0].parameters[key] =
          Math.random() * (mapping.parameters[key].max - mapping.parameters[key].min + 1) + mapping.parameters[key].min;
        this.sources[1].parameters[key] =
          Math.random() * (mapping.parameters[key].max - mapping.parameters[key].min + 1) + mapping.parameters[key].min;
      }
    });
    this.sources[0].parameters.modulate = 0;
    this.sources[1].parameters.modulate = 0;
  }
}

export const state: State = new State();
