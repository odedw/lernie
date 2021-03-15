import { SourceType } from './source';
import { Parameter } from './parameters';

export class SourceState {
  parameters!: Record<Parameter, number>;
  sourceType!: SourceType;
  lfos!: Record<Parameter, number>[];
  constructor(parameters: Record<Parameter, number>, sourceType: SourceType) {
    this.parameters = parameters;
    this.sourceType = sourceType;
    this.lfos = [this.generateLfoMap(), this.generateLfoMap()];
  }

  generateLfoMap() {
    const lfo = { ...this.parameters };
    Object.keys(lfo).forEach((k) => (lfo[k as Parameter] = 0));
    return lfo;
  }
}

export type State = {
  sources: SourceState[];
  presets: SourceState[][];
};
