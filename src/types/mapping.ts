import { Key } from './Keys';
import { Parameter } from './parameters';

export type MidiCCBinding = {
  cc: number;
  channel?: number;
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
