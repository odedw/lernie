import { SourceState, SourceType, HydraStream, State, Parameter, CallbackObject, SourceBuffer } from '../types';
import { LFO } from './LFO';
import { config } from '../config/parameterConfig';

// eslint-disable-next-line
function debug(val: number): number {
  console.log(val);
  return val;
}

function getValueGenerator(ss: SourceState, p: Parameter, lfos: LFO[]): (co: CallbackObject) => number {
  return ({ time }) => {
    let value = ss.parameters[p];
    const valueRange = config.parameters[p].max - config.parameters[p].min;

    lfos.forEach((lfo, i) => {
      // add lfo
      const lfoValue = ss.lfos[i][p] < 0 ? 1 - lfo.getValue() : lfo.getValue();
      value += lfoValue * Math.abs(ss.lfos[i][p]) * valueRange;
    });

    // add audio
    value += ss.audio[p] * valueRange * a.fft[0];

    // clamp
    value = Math.min(Math.max(config.parameters[p].min, value), config.parameters[p].max);
    return value;
  };
}

function getOsc(ss: SourceState, lfos: LFO[]): HydraStream {
  return osc(
    getValueGenerator(ss, 'mod1', lfos),
    getValueGenerator(ss, 'mod2', lfos),
    getValueGenerator(ss, 'mod3', lfos)
  );
  // .kaleid(() => ss.parameters.kaleid);
}

function getNoise(ss: SourceState, screenRatio: number, lfos: LFO[]): HydraStream {
  return noise(80, getValueGenerator(ss, 'mod1', lfos))
    .scale(1, 1, screenRatio)
    .contrast(getValueGenerator(ss, 'mod2', lfos));
  // .kaleid(getValueGenerator(ss, 'kaleid', lfo));
}

function getVoronoi(ss: SourceState, screenRatio: number, lfos: LFO[]): HydraStream {
  return voronoi(100, getValueGenerator(ss, 'mod1', lfos), getValueGenerator(ss, 'mod2', lfos)).scale(
    1,
    1,
    screenRatio
  );
  // .kaleid(getValueGenerator(ss, 'kaleid', lfo));
}

function getScreen(ss: SourceState, sb: SourceBuffer, screenRatio: number, lfos: LFO[]): HydraStream {
  sb.initScreen();
  return src(sb)
    .saturate(getValueGenerator(ss, 'mod1', lfos))
    .invert(getValueGenerator(ss, 'mod3', lfos))
    .luma(getValueGenerator(ss, 'mod2', lfos), 0);
}

function getShape(ss: SourceState, screenRatio: number, lfos: LFO[]): HydraStream {
  return shape(getValueGenerator(ss, 'mod1', lfos), getValueGenerator(ss, 'mod2', lfos))
    .scale(1, 1, screenRatio)
    .rotate(({ time }) => ((time * ss.parameters.mod3) % 360) * (Math.PI / 180));
}

function getSource(ss: SourceState, sb: SourceBuffer, screenRatio: number, lfos: LFO[]): HydraStream {
  switch (ss.sourceType) {
    case SourceType.noise:
      return getNoise(ss, screenRatio, lfos);
    case SourceType.voronoi:
      return getVoronoi(ss, screenRatio, lfos);
    case SourceType.screen:
      return getScreen(ss, sb, screenRatio, lfos);
    case SourceType.shape:
      return getShape(ss, screenRatio, lfos);
    default:
      return getOsc(ss, lfos);
  }
}

const outputBufferByIndex = (i: number) => [o1, o2][i];
const modSourceByIndex = (i: number) => [o2, o1][i];
const sourceBufferByIndex = (i: number) => [s0, s1][i];

export function runSource(s: State, i: number, screenRatio: number, lfos: LFO[]) {
  const ss = s.sources[i];
  const o = outputBufferByIndex(i);
  const sb = sourceBufferByIndex(i);
  const ms = modSourceByIndex(i);

  const source = getSource(ss, sb, screenRatio, lfos);
  source
    .blend(o, getValueGenerator(ss, 'feedback', lfos))
    .rotate(getValueGenerator(ss, 'rotation', lfos), 0)
    .color(
      getValueGenerator(ss, 'colorR', lfos),
      getValueGenerator(ss, 'colorG', lfos),
      getValueGenerator(ss, 'colorB', lfos)
    )
    .contrast(getValueGenerator(ss, 'contrast', lfos))
    .pixelate(
      (obj) => getValueGenerator(ss, 'pixelate', lfos)(obj) * screenRatio,
      getValueGenerator(ss, 'pixelate', lfos)
    )
    .scale(getValueGenerator(ss, 'scale', lfos))
    .colorama(getValueGenerator(ss, 'colorama', lfos))
    .modulate(src(ms), getValueGenerator(ss, 'modulate', lfos))
    .modulateRotate(
      src(ms),
      getValueGenerator(ss, 'modulateRotate', lfos),
      getValueGenerator(ss, 'modulateRotate', lfos)
    )
    .modulateScale(src(ms), getValueGenerator(ss, 'modulateScale', lfos))
    .modulate(o, getValueGenerator(ss, 'selfModulate', lfos))
    .repeat(getValueGenerator(ss, 'repeatXY', lfos), getValueGenerator(ss, 'repeatXY', lfos))
    .brightness(getValueGenerator(ss, 'brightness', lfos))
    .out(o);
}
export default function run(state: State, screenRatio: number, lfos: LFO[]) {
  runSource(state, 0, screenRatio, lfos);
  runSource(state, 1, screenRatio, lfos);
  // runSource(state, 2, screenRatio, lfos);
  // runSource(state, 3, screenRatio, lfos);

  solid(0, 0, 0, 0)
    .blend(src(o1), getValueGenerator(state.sources[0], 'blend', lfos))
    .blend(src(o2), getValueGenerator(state.sources[1], 'blend', lfos))
    .diff(solid(0, 0, 0, 0).blend(src(o1), getValueGenerator(state.sources[0], 'diff', lfos)))
    .diff(solid(0, 0, 0, 0).blend(src(o2), getValueGenerator(state.sources[1], 'diff', lfos)))
    // .blend(src(o3), getValueGenerator(state.sources[2], 'blend', lfos))
    // .blend(src(o4), getValueGenerator(state.sources[3], 'blend', lfos))
    // .diff(solid(0, 0, 0, 0).blend(src(o1), getValueGenerator(state.sources[2], 'diff', lfos)))
    // .diff(solid(0, 0, 0, 0).blend(src(o2), getValueGenerator(state.sources[3], 'diff', lfos)))
    .out(o0);
}

export function runAudio() {
  // @ts-ignore
  navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then((desktopStream) => {
    // @ts-ignore
    const desktopSource = a.context.createMediaStreamSource(desktopStream);
    a.setSmooth(0.5);
    // @ts-ignore
    a.meyda.setSource(desktopSource);
    a.setBins(10);
  });

  // a.show();
}
