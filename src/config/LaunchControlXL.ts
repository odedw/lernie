import { Mapping } from '../types';

const config: Mapping = {
  sources: [
    {
      parameters: {
        blend: { cc: 77 },
        diff: { cc: 78 },
        feedback: { cc: 79 },
        selfModulate: { cc: 80 },
        mod1: { cc: 13 },
        mod2: { cc: 14 },
        mod3: { cc: 15 },
        rotation: { cc: 16 },
        kaleid: { cc: 29 },
        pixelate: { cc: 30 },
        scale: { cc: 31 },
        colorama: { cc: 32 },
        modulate: { cc: 49 },
        modulateRotate: { cc: 50 },
        modulateScale: { cc: 51 },
        repeatXY: { cc: 52 },
      },
      switchSource: { note: 'F2' },
      reset: { note: 'F#2' },
    },
    {
      parameters: {
        blend: { cc: 81 },
        diff: { cc: 82 },
        feedback: { cc: 83 },
        selfModulate: { cc: 84 },
        mod1: { cc: 17 },
        mod2: { cc: 18 },
        mod3: { cc: 19 },
        rotation: { cc: 20 },
        kaleid: { cc: 33 },
        pixelate: { cc: 34 },
        scale: { cc: 35 },
        colorama: { cc: 36 },
        modulate: { cc: 53 },
        modulateRotate: { cc: 54 },
        modulateScale: { cc: 55 },
        repeatXY: { cc: 56 },
      },
      switchSource: { note: 'A3' },
      reset: { note: 'A#3' },
    },
  ],
  shift: { note: 'C8' },
  lfo1: { note: 'B7' },
  presets: [
    { note: 'C#5' },
    { note: 'D5' },
    { note: 'D#5' },
    { note: 'E5' },
    { note: 'F6' },
    { note: 'F#6' },
    { note: 'G6' },
    { note: 'G#6' },
  ],
};

export default config;
