import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Parameter, SourceType } from '../types';
import { Key } from '../types/Keys';

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
  loadPreset!: Observable<number>;
  savePreset!: Observable<number>;
  keyDown!: Observable<Key>;
  keyUp!: Observable<Key>;
}

export default new Streams();
