import { SourceType } from './source';
import { Parameter } from './parameters';
import { allParameters } from '../config/parameterConfig';

export class SourceState {
  parameters!: Record<Parameter, number>;
  sourceType!: SourceType;
  lfos!: Record<Parameter, number>[];
  audio!: Record<Parameter, number>;
  constructor(
    parameters: Record<Parameter, number>,
    sourceType: SourceType,
    lfos?: Record<Parameter, number>[],
    audio?: Record<Parameter, number>
  ) {
    this.parameters = parameters;
    this.sourceType = sourceType;
    this.lfos = lfos
      ? [{ ...lfos[0] }, { ...lfos[1] }]
      : [this.generateZeroParametersRecord(), this.generateZeroParametersRecord()];
    this.audio = audio ? { ...audio } : this.generateZeroParametersRecord();
  }

  generateZeroParametersRecord() {
    const record = { ...this.parameters };
    allParameters.forEach((p) => (record[p] = 0));
    return record;
  }
}

export type State = {
  sources: SourceState[];
  presets: SourceState[][];
};
