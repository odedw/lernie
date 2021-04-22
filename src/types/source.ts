export enum SourceType {
  osc = 0,
  noise,
  voronoi,
  shape,
  screen,
  p5,
}

export const SourceTypeValues = Object.keys(SourceType).filter((k) => isNaN(Number(k)));
