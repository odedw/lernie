import { OutputBuffer } from '../types/hydra';
import { SourceState } from '../types/state';
import { state } from './state';

// function debug(val: number): number {
//   console.log(val);
//   return val;
// }

function runSource(o: OutputBuffer, sourceState: SourceState, modulationSource: OutputBuffer) {
  osc(
    () => sourceState.parameters.mod1,
    () => sourceState.parameters.mod2,
    () => sourceState.parameters.mod3
  )
    .rotate(() => sourceState.parameters.rotation, 0)
    .kaleid(() => sourceState.parameters.kaleid)
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
    .blend(src(o0), 0.8)
    .out(o0);
}
