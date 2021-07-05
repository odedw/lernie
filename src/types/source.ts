export enum SourceType {
  osc = 0,
  noise,
  p5,
  voronoi,
  shape,
  screen,
}

export const SourceTypeValues = Object.keys(SourceType).filter((k) => isNaN(Number(k)));
