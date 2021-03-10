import { SourceType } from './source';
import { Parameter } from './parameters';

export class SourceState {
  parameters!: Record<Parameter, number>;
  sourceType!: SourceType;
  lfo!: Record<Parameter, number>;
  constructor(parameters: Record<Parameter, number>, sourceType: SourceType) {
    this.parameters = parameters;
    this.sourceType = sourceType;
    this.lfo = { ...parameters };
    Object.keys(this.lfo).forEach((k) => (this.lfo[k as Parameter] = 0));
  }
}

export type State = {
  sources: SourceState[];
  presets: SourceState[][];
  shift: boolean;
  lfo1: boolean;
};
