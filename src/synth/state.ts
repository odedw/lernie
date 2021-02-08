import { SourceMapping } from '../types/mapping';
import { SourceState } from '../types/state';

const defaultSourceState: SourceState = {
  mod1: 40,
  mod2: 0,
  mod3: 0,
  rotation: 0,
  kaleid: 1,
  pixelate: 1500,
  scale: 1,
  colorama: 0,
  modulate: 0,
  blend: 0,
  diff: 0,
};
export class State {
  sources: SourceState[] = [{ ...defaultSourceState }, { ...defaultSourceState }];

  randomize(mapping: SourceMapping) {
    Object.keys(defaultSourceState).forEach((k) => {
      if (Math.random() < 0.5) {
        const key = k as keyof SourceState;
        this.sources[0][key] = Math.random() * (mapping[key].max - mapping[key].min + 1) + mapping[key].min;
        this.sources[1][key] = Math.random() * (mapping[key].max - mapping[key].min + 1) + mapping[key].min;
      }
    });
    this.sources[0].modulate = 0;
    this.sources[1].modulate = 0;
  }
}

export const state: State = new State();
