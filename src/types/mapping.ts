import { Parameter } from "./source";

export type ParameterMapping = {
  min: number;
  max: number;
  cc: number;
  channel?: number;
};

export type NoteMapping = {
  note: number;
  channel?: number;
};
export type SourceMapping = {
  parameters: Record<Parameter, ParameterMapping>;

  switchSource: NoteMapping;
};

export type Mapping = {
  sources: SourceMapping[];
};
