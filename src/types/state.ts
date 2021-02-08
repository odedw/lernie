import { SourceMapping } from './mapping';

export type SourceState = {
  [K in keyof SourceMapping]: number;
};
