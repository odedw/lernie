import { Subject } from 'rxjs/internal/Subject';
import { Parameter, SourceType } from '../types';

export type ParameterChangeEvent = {
  parameter: Parameter;
  value: number;
};

// export type SourceTypeChangeEvent = {
//   type: SourceType;
// };

export default class ScopeSubjects {
  parameterChange = new Subject<ParameterChangeEvent>();
  sourceTypeChange = new Subject<SourceType>();
}
