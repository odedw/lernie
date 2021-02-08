export type ParameterMapping = {
  min: number;
  max: number;
  cc: number;
  channel?: number;
};
export type SourceMapping = {
  mod1: ParameterMapping;
  mod2: ParameterMapping;
  mod3: ParameterMapping;
  rotation: ParameterMapping;
  kaleid: ParameterMapping;
  pixelate: ParameterMapping;
  scale: ParameterMapping;
  colorama: ParameterMapping;
  modulate: ParameterMapping;

  // levels
  blend: ParameterMapping;
  diff: ParameterMapping;
};

export type Mapping = {
  sources: SourceMapping[];
};
