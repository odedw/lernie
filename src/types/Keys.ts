export type Key = 'shift' | 'lfo1' | 'lfo2' | 'audio';
export type KeyState = Record<Key, boolean>;

export const allKeys: Key[] = ['shift', 'lfo1', 'lfo2', 'audio'];
