import { SourceMapping } from './mapping';

export type SourceState = {
  [K in keyof SourceMapping]: number;
};

export class State {
  sources: SourceState[] = [
    {
      mod1: 40,
      mod2: 0,
      mod3: 0,
      rotation: 0,
      kaleid: 1,
      pixelate: 1500,
      scale: 1,
      colorama: 0,
      modulate: 0,
      blendLevel: 0,
    },
    {
      mod1: 40,
      mod2: 0,
      mod3: 0,
      rotation: 0,
      kaleid: 1,
      pixelate: 1500,
      scale: 1,
      colorama: 0,
      modulate: 0,
      blendLevel: 0,
    },
  ];
}
