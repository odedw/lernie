import { Level, Parameter, SourceType } from './source';

export type SourceState = {
  parameters: Record<Parameter, number>;
  levels: Record<Level, number>;

  sourceType: SourceType;
};
