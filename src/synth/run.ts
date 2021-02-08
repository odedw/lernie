import { OutputBuffer } from '../types/hydra';
import { SourceState } from '../types/state';
import { state } from './state';

function debug(val: number): number {
  console.log(val);
  return val;
}

function runSource(o: OutputBuffer, sourceState: SourceState, modulationSource: OutputBuffer) {
  osc(
    () => sourceState.mod1,
    () => sourceState.mod2,
    () => sourceState.mod3
  )
    .rotate(() => sourceState.rotation, 0)
    .kaleid(() => sourceState.kaleid)
    .pixelate(
      () => sourceState.pixelate,
      () => sourceState.pixelate
    )
    .scale(() => sourceState.scale)
    .colorama(() => sourceState.colorama)
    // .modulate(src(modulationSource), () => sourceState.modulate)
    .out(o);
}
export default function run() {
  runSource(o1, state.sources[0], o2);
  //   runSource(o2, state.sources[1], o1);

  solid(0, 0, 0, 0)
    .blend(src(o1), () => state.sources[0].blendLevel)
    //     .blend(src(o2), () => state.sources[1].blendLevel)
    .out();
}
