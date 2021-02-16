import { SourceState, SourceType, HydraStream, OutputBuffer } from '../types';
import { state } from './state';

// eslint-disable-next-line
function debug(val: number): number {
  console.log(val);
  return val;
}

function getSource(sourceState: SourceState): HydraStream {
  if (sourceState.sourceType === SourceType.noise) {
    return noise(
      () => sourceState.parameters.mod1,
      () => sourceState.parameters.mod2
    );
  } else if (sourceState.sourceType === SourceType.voronoi) {
    return voronoi(
      () => sourceState.parameters.mod1,
      () => sourceState.parameters.mod2,
      () => sourceState.parameters.mod3
    );
  } else if (sourceState.sourceType === SourceType.screen) {
    s0.initScreen();
    return src(s0).repeat(
      () => sourceState.parameters.kaleid,
      () => sourceState.parameters.kaleid
    );
  } else {
    return osc(
      () => sourceState.parameters.mod1,
      () => sourceState.parameters.mod2,
      () => sourceState.parameters.mod3
    ).kaleid(() => sourceState.parameters.kaleid);
  }
}

function runSource(o: OutputBuffer, sourceState: SourceState, modulationSource: OutputBuffer) {
  const source = getSource(sourceState);
  source
    .rotate(() => sourceState.parameters.rotation, 0)
    .pixelate(
      () => sourceState.parameters.pixelate,
      () => sourceState.parameters.pixelate
    )
    .scale(() => sourceState.parameters.scale)
    .colorama(() => sourceState.parameters.colorama)
    .modulate(src(modulationSource), () => sourceState.parameters.modulate)
    .modulateRotate(
      src(modulationSource),
      () => sourceState.parameters.modulateRotate,
      () => sourceState.parameters.modulateRotate
    )
    .out(o);
}
export default function run() {
  runSource(o1, state.sources[0], o2);
  runSource(o2, state.sources[1], o1);

  solid(0, 0, 0, 0)
    .blend(src(o1), () => state.sources[0].parameters.blend)
    .blend(src(o2), () => state.sources[1].parameters.blend)
    .diff(solid(0, 0, 0, 0).blend(src(o1), () => state.sources[0].parameters.diff))
    .diff(solid(0, 0, 0, 0).blend(src(o2), () => state.sources[1].parameters.diff))
    .out(o0);
}
