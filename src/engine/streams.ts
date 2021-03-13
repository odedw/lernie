import { Subject } from 'rxjs/internal/Subject';
import { Parameter, SourceType } from '../types';

export type ParameterChangeEvent = {
  parameter: Parameter;
  value: number;
  sourceIndex: number;
};

export type SourceTypeChange = {
  sourceIndex:number;
  type: SourceType;
}

export default class Streams {
  parameterChange = new Subject<ParameterChangeEvent>();
  lfoChange = new Subject<ParameterChangeEvent>();
  sourceTypeChange = new Subject<SourceTypeChange>();
  loadPreset = new Subject<number>();
  savePreset = new Subject<number>();
}
