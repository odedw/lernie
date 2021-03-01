import { Subject } from 'rxjs/internal/Subject';
import { Parameter, SourceType } from '../types';

export type ParameterChangeEvent = {
  parameter: Parameter;
  value: number;
};

export default class ScopeSubjects {
  parameterChange = new Subject<ParameterChangeEvent>();
  sourceTypeChange = new Subject<SourceType>();
  loadPreset = new Subject<number>();
  savePreset = new Subject<number>();
}
