import { Parameter } from './source';

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

  // ccBindings: Record<string, MidiCCBinding>;
  // noteBindings: Record<string, MidiNoteBinding>;
};

export type Mapping = {
  sources: SourceMapping[];
};
