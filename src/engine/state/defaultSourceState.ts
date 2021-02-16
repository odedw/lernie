import { SourceState, SourceType } from '../../types';

export const generateDefaultSourceState = (): SourceState => ({
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
  sourceType: SourceType.osc,
});
