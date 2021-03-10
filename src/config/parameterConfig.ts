import { Parameter, SourceType } from '../types';

export type Range = {
  min: number;
  max: number;
};
export type ParameterConfig = {
  parameters: Record<Parameter, Range>;
  sourceMods: Record<SourceType, Record<'mod1' | 'mod2' | 'mod3', Range>>;
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
    colorama: { min: -0.001, max: 1 },
    modulate: { min: -1, max: 1 },
    modulateRotate: { min: -10, max: 10 },
    modulateScale: { min: -10, max: 10 },
    repeatXY: { min: 1, max: 8 },
    blend: { min: 0, max: 1 },
    diff: { min: 0, max: 1 },
    feedback: { min: 0, max: 1 },
    selfModulate: { min: 0, max: 1 },
  },
  sourceMods: {
    [SourceType.osc]: {
      mod1: { min: 0, max: 100 },
      mod2: { min: -1, max: 1 },
      mod3: { min: 0, max: 6.3 },
    },
    [SourceType.noise]: {
      mod1: { min: 0, max: 1 },
      mod2: { min: 0, max: 0.5 },
      mod3: { min: 0, max: 10 },
    },
    [SourceType.voronoi]: {
      mod1: { min: 0, max: 80 },
      mod2: { min: 0, max: 10 },
      mod3: { min: 0, max: 20 },
    },
    [SourceType.screen]: {
      mod1: { min: 0, max: 1 },
      mod2: { min: 0, max: 1 },
      mod3: { min: 0, max: 1 },
    },
    [SourceType.shape]: {
      mod1: { min: 1, max: 20 },
      mod2: { min: 0, max: 1 },
      mod3: { min: -100, max: 100 },
    },
  },
};
