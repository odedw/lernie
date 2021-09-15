import streams from '../engine/streams';
import { storage } from './storageWrapper';

class Settings {
  private _midiInput: string | undefined;
  private _scopeEnabled: boolean = true;
  init() {
    this.midiInput = storage.get(storage.keys.MIDI_INPUT) || undefined;

    const scopeValFromStorage = storage.get(storage.keys.SCOPE_ENABLED);
    this._scopeEnabled = scopeValFromStorage !== null ? scopeValFromStorage === 'true' : true;
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
  public get scopeEnabled(): boolean {
    return this._scopeEnabled;
  }

  public set scopeEnabled(val: boolean) {
    this._scopeEnabled = val;
    storage.set(storage.keys.SCOPE_ENABLED, val.toString());
  }
}

export const settings = new Settings();
