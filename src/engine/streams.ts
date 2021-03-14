import { Subject } from 'rxjs/internal/Subject';
import { Parameter, SourceType } from '../types';

export type ParameterChangeEvent = {
  parameter: Parameter;
  value: number;
  sourceIndex: number;
};

export type LfoDestinationChange = ParameterChangeEvent & {
  lfoIndex: number;
};

export type SourceTypeChange = {
  sourceIndex: number;
  type: SourceType;
};

export class Streams {
  parameterChange = new Subject<ParameterChangeEvent>();
  lfoChange = new Subject<LfoDestinationChange>();
  sourceTypeChange = new Subject<SourceTypeChange>();
  loadPreset = new Subject<number>();
  savePreset = new Subject<number>();
}

export default new Streams();
