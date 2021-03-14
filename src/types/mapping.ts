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
  shift: MidiNoteBinding;
  lfo1: MidiNoteBinding;
  lfo2: MidiNoteBinding;
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
  // 73,89
};
