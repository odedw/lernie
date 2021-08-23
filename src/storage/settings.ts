import streams from '../engine/streams';
import { storage } from './storageWrapper';

class Settings {
  private _midiInput: string | undefined;
  init() {
    this.midiInput = storage.get(storage.keys.MIDI_INPUT) || undefined;
  }

  public get midiInput(): string | undefined {
    return this._midiInput;
  }

  public set midiInput(inputName: string | undefined) {
    this._midiInput = inputName;
    if (inputName) {
      storage.set(storage.keys.MIDI_INPUT, inputName);
    }
    streams.lifecycle.settings.midiInputChanged$.next(inputName);
  }
}

export const settings = new Settings();
