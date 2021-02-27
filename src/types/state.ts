import { Parameter, SourceType } from './source';

export class SourceState {
  parameters!: Record<Parameter, number>;
  sourceType!: SourceType;
  constructor(parameters: Record<Parameter, number>, sourceType: SourceType) {
    this.parameters = parameters;
    this.sourceType = sourceType;
  }
}

export type State = {
  sources: SourceState[];
  presets: SourceState[][];
  shift: boolean;
};
