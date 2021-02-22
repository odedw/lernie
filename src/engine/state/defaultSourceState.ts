import { SourceState, SourceType } from '../../types';
const defaultParams = {
  rotation: 0,
  kaleid: 1,
  pixelate: 1500,
  scale: 1,
  colorama: 0,
  modulate: 0,
  modulateRotate: 0,
  modulateScale: 0,
  repeat: 1,
  blend: 1,
  diff: 0,
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
    mod1: 0,
    mod2: 1,
    mod3: 1,
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
      ...defaultSourceMods[sourceType],
      ...defaultParams,
    },
    sourceType
  );
  res.parameters.blend = primary ? res.parameters.blend : 0;
  return res;
};
