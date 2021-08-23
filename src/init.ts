import { engine } from './engine';
import { init as midiInit } from 'rmidi';
import { settings } from './storage';
export default async function init() {
  await midiInit();
  await settings.init();
  await engine.init();
}
