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

export enum SourceType {
  osc = 0,
  noise,
  voronoi,
  screen
}
