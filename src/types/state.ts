import { SourceType } from './source';
import { Parameter } from './parameters';
import { allParameters } from '../config/parameterConfig';

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
    allParameters.forEach((p) => (lfo[p] = 0));
    return lfo;
  }
}

export type State = {
  sources: SourceState[];
  presets: SourceState[][];
};
