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
        brightness: { cc: 16 },
        rotation: { cc: 29 },
        pixelate: { cc: 30 },
        scale: { cc: 31 },
        colorama: { cc: 32 },
        modulate: { cc: 49 },
        modulateRotate: { cc: 50 },
        modulateScale: { cc: 51 },
        repeatXY: { cc: 52 },
        colorR: { cc: 37 },
        colorG: { cc: 38 },
        colorB: { cc: 39 },
        contrast: { cc: 40 },
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
        brightness: { cc: 20 },
        rotation: { cc: 33 },
        pixelate: { cc: 34 },
        scale: { cc: 35 },
        colorama: { cc: 36 },
        modulate: { cc: 53 },
        modulateRotate: { cc: 54 },
        modulateScale: { cc: 55 },
        repeatXY: { cc: 56 },
        colorR: { cc: 41 },
        colorG: { cc: 42 },
        colorB: { cc: 43 },
        contrast: { cc: 44 },
      },
      switchSource: { note: 'A3' },
      reset: { note: 'A#3' },
    },
  ],
  keys: {
    shift: { note: 'A7' },
    lfo1: { note: 'B7' },
    lfo2: { note: 'C8' },
    audio: { note: 'A#7' },
  },
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
  lfosControl: [
    {
      type: { cc: 86 },
    },
    {
      type: { cc: 90 },
    },
  ],
};

export default config;
