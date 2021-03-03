import { SourceState, SourceType, HydraStream, OutputBuffer, State } from '../types';

// eslint-disable-next-line
function debug(val: number): number {
  console.log(val);
  return val;
}

function getSource(ss: SourceState, screenRatio: number): HydraStream {
  if (ss.sourceType === SourceType.noise) {
    return noise(80, () => ss.parameters.mod1)
      .scale(1, 1, screenRatio)
      .contrast(() => ss.parameters.mod2)
      .kaleid(() => ss.parameters.kaleid);
  } else if (ss.sourceType === SourceType.voronoi) {
    return voronoi(
      100,
      () => ss.parameters.mod1,
      () => ss.parameters.mod2
    )
      .scale(1, 1, screenRatio)
      .kaleid(() => ss.parameters.kaleid);
  } else if (ss.sourceType === SourceType.screen) {
    s0.initScreen();
    return src(s0)
      .brightness(() => ss.parameters.mod1)
      .saturate(() => ss.parameters.mod2)
      .scale(1, 1, () => ss.parameters.mod3);
  } else if (ss.sourceType === SourceType.shape) {
    return (
      shape(
        () => ss.parameters.mod1,
        () => ss.parameters.mod2
      )
        // .scale(1, 1, screenRatio)
        .rotate(({ time }) => ((time * ss.parameters.mod3) % 360) * (Math.PI / 180))
    );
  } else {
    return osc(
      () => ss.parameters.mod1,
      () => ss.parameters.mod2,
      () => ss.parameters.mod3
    ).kaleid(() => ss.parameters.kaleid);
  }
}

function runSource(o: OutputBuffer, ss: SourceState, modulationSource: OutputBuffer, screenRatio: number) {
  const source = getSource(ss, screenRatio);
  source
    .blend(o, () => ss.parameters.feedback)
    .rotate(() => ss.parameters.rotation, 0)
    .pixelate(
      () => ss.parameters.pixelate,
      () => ss.parameters.pixelate
    )
    .scale(() => ss.parameters.scale)
    .colorama(() => ss.parameters.colorama)
    .modulate(src(modulationSource), () => ss.parameters.modulate)
    .modulateRotate(
      src(modulationSource),
      () => ss.parameters.modulateRotate,
      () => ss.parameters.modulateRotate
    )
    .modulateScale(src(modulationSource), () => ss.parameters.modulateScale)
    .modulate(o, () => ss.parameters.selfModulate)
    .repeat(
      () => ss.parameters.repeatXY,
      () => ss.parameters.repeatXY
    )
    .out(o);
}
export default function run(state: State, screenRatio: number) {
  runSource(o1, state.sources[0], o2, screenRatio);
  runSource(o2, state.sources[1], o1, screenRatio);

  solid(0, 0, 0, 0)
    .blend(src(o1), () => state.sources[0].parameters.blend)
    .blend(src(o2), () => state.sources[1].parameters.blend)
    // .layer(src(o1), () => state.sources[0].parameters.diff)
    // .layer(src(o2), () => state.sources[1].parameters.diff)
    // .mult(src(o1), () => state.sources[0].parameters.diff)
    // .mult(src(o2), () => state.sources[1].parameters.diff)
    // .mask(src(o1), 3, () => state.sources[0].parameters.diff)
    // .mask(src(o2), 3, () => state.sources[1].parameters.diff)
    .diff(solid(0, 0, 0, 0).blend(src(o1), () => state.sources[0].parameters.diff))
    .diff(solid(0, 0, 0, 0).blend(src(o2), () => state.sources[1].parameters.diff))
    .out(o0);
}
