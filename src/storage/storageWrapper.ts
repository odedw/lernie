class Storage {
  keys = {
    MIDI_INPUT: 'MIDI_INPUT',
    SCOPE_ENABLED: 'SCOPE_ENABLED',
  };
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}

export const storage = new Storage();
