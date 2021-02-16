import { Level, Parameter } from '../types';

export type Range = {
  min: number;
  max: number;
};
export type ParameterConfig = {
  parameters: Record<Parameter, Range>;
  levels: Record<Level, Range>;
};

export const config: ParameterConfig = {
  parameters: {
    mod1: { min: 0, max: 80 },
    mod2: { min: -0.5, max: 0.5 },
    mod3: { min: 0, max: 10 },
    rotation: { min: 0, max: 6.283185307179586 },
    kaleid: { min: 1, max: 50 },
    pixelate: { min: 10, max: 1500 },
    scale: { min: 0.5, max: 7 },
    colorama: { min: 0, max: 1 },
    modulate: { min: -1, max: 1 },
    modulateRotate: { min: -10, max: 10 },
  },
  levels: {
    blend: { min: 0, max: 1 },
    diff: { min: 0, max: 1 },
  },
};
