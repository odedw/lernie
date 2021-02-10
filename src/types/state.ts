import { Parameter, SourceType } from './mapping';

export type SourceState = {
  parameters: Record<Parameter, number>;

  sourceType: SourceType;
};
