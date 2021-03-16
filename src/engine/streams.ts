import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Parameter, SourceType } from '../types';
import { Key } from '../types/Keys';

export type ParameterValueChangeEvent = {
  parameter: Parameter;
  value: number;
  sourceIndex: number;
};

export type LfoDestinationValueChange = ParameterValueChangeEvent & {
  lfoIndex: number;
};

export type SourceTypeChange = {
  sourceIndex: number;
  type: SourceType;
};

export class Streams {
  parameterValueChange = new Subject<ParameterValueChangeEvent>();
  lfoDestinationValueChange = new Subject<LfoDestinationValueChange>();
  sourceTypeChange = new Subject<SourceTypeChange>();
  loadPreset!: Observable<number>;
  savePreset!: Observable<number>;
  keyDown!: Observable<Key>;
  keyUp!: Observable<Key>;
  resetSource!: Observable<number>;
}

export default new Streams();
