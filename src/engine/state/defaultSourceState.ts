import { Parameter, SourceState, SourceType } from '../../types';
const defaultParams: Record<Parameter, number> = {
  rotation: 0,
  // kaleid: 1,
  brightness: 0,
  pixelate: 1500,
  scale: 1,
  colorama: 0,
  modulate: 0,
  modulateRotate: 0,
  modulateScale: 0,
  repeatXY: 1,
  blend: 1,
  diff: 0,
  feedback: 0,
  selfModulate: 0,
  colorR: 1,
  colorG: 1,
  colorB: 1,
  contrast: 1,
  mod1: 0,
  mod2: 0,
  mod3: 0,
};
const defaultSourceMods = {
  [SourceType.osc]: {
    mod1: 40,
    mod2: 0,
    mod3: 0,
  },
  [SourceType.noise]: {
    mod1: 0,
    mod2: 0.8,
    mod3: 0,
  },
  [SourceType.voronoi]: {
    mod1: 0,
    mod2: 0,
    mod3: 0,
  },
  [SourceType.screen]: {
    mod1: 1,
    mod2: 0,
    mod3: 0.01,
  },
  [SourceType.shape]: {
    mod1: 3,
    mod2: 0.3,
    mod3: 0,
  },
};
export const generateDefaultSourceState = (sourceType: SourceType, primary: boolean = true): SourceState => {
  const res = new SourceState(
    {
      ...defaultParams,
      ...defaultSourceMods[sourceType],
    },
    sourceType
  );
  res.parameters.blend = primary ? res.parameters.blend : 0;
  return res;
};
