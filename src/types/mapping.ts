import { allKeys, Key } from './Keys';
import { Parameter } from './parameters';

export type MidiCCBinding = {
  cc: number;
  channel?: number;
  keys?: Record<Key, boolean>;
};

export type MidiNoteBinding = {
  note: string;
  channel?: number;
};
export type SourceMapping = {
  parameters: Record<Parameter, MidiCCBinding>;
  // buttons
  switchSource: MidiNoteBinding;
  reset: MidiNoteBinding;
};

export type Mapping = {
  sources: SourceMapping[];
  keys: Record<Key, MidiNoteBinding>;
  presets: [
    MidiNoteBinding,
    MidiNoteBinding,
    MidiNoteBinding,
    MidiNoteBinding,
    MidiNoteBinding,
    MidiNoteBinding,
    MidiNoteBinding,
    MidiNoteBinding
  ];
};

export function generateKeyRecord(keys: Key[] = []): Record<Key, boolean> {
  return allKeys.reduce<Record<Key, boolean>>((p, c) => {
    p[c] = keys.includes(c);
    return p;
  }, {} as Record<Key, boolean>);
}
