import { Parameter, SourceType } from './source';

export type SourceState = {
  parameters: Record<Parameter, number>;

  sourceType: SourceType;
};
