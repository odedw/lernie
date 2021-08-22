import { engine } from './engine';
import { init as midiInit } from 'rmidi';
import { storage } from './storage';
export default async function init() {
  await midiInit();
  await engine.init(storage.get(storage.keys.MIDI_INPUT));
}
