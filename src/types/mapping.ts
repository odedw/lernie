export type ParameterMapping = {
  min: number;
  max: number;
  cc: number;
  channel?: number;
};

export type NoteMapping = {
  note: number;
  channel?: number;
};

export type Parameter =
  | 'mod1'
  | 'mod2'
  | 'mod3'
  | 'rotation'
  | 'kaleid'
  | 'pixelate'
  | 'scale'
  | 'colorama'
  | 'modulate'
  | 'modulateRotate'
  | 'blend'
  | 'diff';

export type SourceType = 'osc' | 'noise' | 'voronoi';
export const allSourceTypes: SourceType[] = ['osc', 'noise', 'voronoi'];

export type SourceMapping = {
  parameters: Record<Parameter, ParameterMapping>;

  switchSource: NoteMapping;
};

export type Mapping = {
  sources: SourceMapping[];
};
