import { Parameter } from './source';

export type ParameterMapping = {
  min: number;
  max: number;
  cc: number;
  channel?: number;
};

export type NoteMapping = {
  note: string;
  channel?: number;
};
export type SourceMapping = {
  parameters: Record<Parameter, ParameterMapping>;

  // buttons
  switchSource: NoteMapping;
  reset: NoteMapping;
};

export type Mapping = {
  sources: SourceMapping[];
};
