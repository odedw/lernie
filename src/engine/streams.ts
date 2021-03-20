import { Observable } from 'rxjs';
import { Parameter, SourceType } from '../types';
import { Key } from '../types/Keys';

export type ParameterValueChangeEvent = {
  parameter: Parameter;
  value: number;
  sourceIndex: number;
};

export type ClearParameterEvent = {
  parameter: Parameter;
  sourceIndex: number;
  destination?: 'lfo1' | 'lfo2' | 'audio';
};

export type AudioDestinationValueChange = ParameterValueChangeEvent;

export type LfoDestinationValueChange = ParameterValueChangeEvent & {
  lfoIndex: number;
};

export type SourceTypeChange = {
  sourceIndex: number;
  type: SourceType;
};

export class Streams {
  parameterValueChange$!: Observable<ParameterValueChangeEvent>;
  lfoDestinationValueChange$!: Observable<LfoDestinationValueChange>;
  audioDestinationValueChange$!: Observable<LfoDestinationValueChange>;
  clearParameter$!: Observable<ClearParameterEvent>;
  sourceTypeChange$!: Observable<number>;
  loadPreset$!: Observable<number>;
  savePreset$!: Observable<number>;
  keyDown$!: Observable<Key>;
  keyUp$!: Observable<Key>;
  resetSource$!: Observable<number>;
  selectAudioBin$!: Observable<number>;
}

export default new Streams();
