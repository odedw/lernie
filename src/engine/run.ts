import { SourceState, SourceType, HydraStream, OutputBuffer } from '../types';
import { state } from './state';

// eslint-disable-next-line
function debug(val: number): number {
  console.log(val);
  return val;
}

function getSource(ss: SourceState): HydraStream {
  if (ss.sourceType === SourceType.noise) {
    return noise(80, () => ss.parameters.mod1).contrast(
      ({ time }) => ss.parameters.mod2 + Math.sin(time) * ss.parameters.mod3
    );
  } else if (ss.sourceType === SourceType.voronoi) {
    return voronoi(
      () => ss.parameters.mod1,
      () => ss.parameters.mod2,
      () => ss.parameters.mod3
    );
  } else if (ss.sourceType === SourceType.screen) {
    s0.initScreen();
    return src(s0).repeat(
      () => ss.parameters.kaleid,
      () => ss.parameters.kaleid
    );
  } else {
    return osc(
      () => ss.parameters.mod1,
      () => ss.parameters.mod2,
      () => ss.parameters.mod3
    );
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
    .kaleid(() => sourceState.parameters.kaleid)
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
