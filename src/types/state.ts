import { SourceType } from './source';
import { Parameter } from './parameters';

export class SourceState {
  parameters!: Record<Parameter, number>;
  sourceType!: SourceType;
  // lfo1!: Record<Parameter, number>;
  // lfo2!: Record<Parameter, number>;
  lfos!: Record<Parameter, number>[];
  constructor(parameters: Record<Parameter, number>, sourceType: SourceType) {
    this.parameters = parameters;
    this.sourceType = sourceType;
    // const lfo = { ...parameters };
    // this.lfo2 = { ...parameters };
    // Object.keys(this.lfo1).forEach((k) => (this.lfo1[k as Parameter] = 0));
    // Object.keys(this.lfo2).forEach((k) => (this.lfo2[k as Parameter] = 0));
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
