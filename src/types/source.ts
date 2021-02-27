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
  | 'modulateScale'
  | 'repeat'
  | 'blend'
  | 'diff'
  | 'feedback'
  | 'selfModulate';

export enum SourceType {
  osc = 0,
  noise,
  voronoi,
  shape,
  screen,
}
