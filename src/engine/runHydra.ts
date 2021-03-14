import { SourceState, SourceType, HydraStream, State, Parameter, CallbackObject, SourceBuffer } from '../types';
import { LFO } from './LFO';
import { config } from '../config/parameterConfig';

// eslint-disable-next-line
function debug(val: number): number {
  console.log(val);
  return val;
}

function getValueGenerator(ss: SourceState, p: Parameter, lfo: LFO): (co: CallbackObject) => number {
  return ({ time }) => {
    const lfoValue = ss.lfo[p] < 0 ? 1 - lfo.getValue(time) : lfo.getValue(time);

    let value = ss.parameters[p];

    // add lfo
    value += lfoValue * Math.abs(ss.lfo[p]) * (config.parameters[p].max - config.parameters[p].min);
    // clamp
    value = Math.min(Math.max(config.parameters[p].min, value), config.parameters[p].max);

    // if (p === 'blend') {
    // console.log(value, lfoValue * Math.abs(ss.lfo[p]) * (config.parameters[p].max - config.parameters[p].min));
    // }
    return value;
  };
}

function getSource(ss: SourceState, sb: SourceBuffer, screenRatio: number, lfo: LFO): HydraStream {
  if (ss.sourceType === SourceType.noise) {
    return noise(80, getValueGenerator(ss, 'mod1', lfo))
      .scale(1, 1, screenRatio)
      .contrast(getValueGenerator(ss, 'mod2', lfo));
    // .kaleid(getValueGenerator(ss, 'kaleid', lfo));
  } else if (ss.sourceType === SourceType.voronoi) {
    return voronoi(100, getValueGenerator(ss, 'mod1', lfo), getValueGenerator(ss, 'mod2', lfo)).scale(
      1,
      1,
      screenRatio
    );
    // .kaleid(getValueGenerator(ss, 'kaleid', lfo));
  } else if (ss.sourceType === SourceType.screen) {
    sb.initScreen();
    return (
      src(sb)
        // .saturate(getValueGenerator(ss, 'mod2', lfo))
        .color(
          getValueGenerator(ss, 'mod1', lfo),
          getValueGenerator(ss, 'mod2', lfo),
          getValueGenerator(ss, 'mod3', lfo)
        )
    );
  } else if (ss.sourceType === SourceType.shape) {
    return shape(getValueGenerator(ss, 'mod1', lfo), getValueGenerator(ss, 'mod2', lfo))
      .scale(1, 1, screenRatio)
      .rotate(({ time }) => ((time * ss.parameters.mod3) % 360) * (Math.PI / 180));
  } else {
    return osc(
      getValueGenerator(ss, 'mod1', lfo),
      getValueGenerator(ss, 'mod2', lfo),
      getValueGenerator(ss, 'mod3', lfo)
    );
    // .kaleid(() => ss.parameters.kaleid);
  }
}

const outputBufferByIndex = (i: number) => [o1, o2][i];
const modSourceByIndex = (i: number) => [o2, o1][i];
const sourceBufferByIndex = (i: number) => [s0, s1][i];

export function runSource(s: State, i: number, screenRatio: number, lfo: LFO) {
  const ss = s.sources[i];
  const o = outputBufferByIndex(i);
  const sb = sourceBufferByIndex(i);
  const ms = modSourceByIndex(i);

  const source = getSource(ss, sb, screenRatio, lfo);
  source
    .blend(o, getValueGenerator(ss, 'feedback', lfo))
    .rotate(getValueGenerator(ss, 'rotation', lfo), 0)
    .pixelate(getValueGenerator(ss, 'pixelate', lfo), getValueGenerator(ss, 'pixelate', lfo))
    .scale(getValueGenerator(ss, 'scale', lfo))
    .colorama(getValueGenerator(ss, 'colorama', lfo))
    .modulate(src(ms), getValueGenerator(ss, 'modulate', lfo))
    .modulateRotate(src(ms), getValueGenerator(ss, 'modulateRotate', lfo), getValueGenerator(ss, 'modulateRotate', lfo))
    .modulateScale(src(ms), getValueGenerator(ss, 'modulateScale', lfo))
    .modulate(o, getValueGenerator(ss, 'selfModulate', lfo))
    .repeat(getValueGenerator(ss, 'repeatXY', lfo), getValueGenerator(ss, 'repeatXY', lfo))
    .brightness(getValueGenerator(ss, 'brightness', lfo))
    .out(o);
}
export default function run(state: State, screenRatio: number, lfo1: LFO) {
  runSource(state, 0, screenRatio, lfo1);
  runSource(state, 1, screenRatio, lfo1);

  solid(0, 0, 0, 0)
    .blend(src(o1), getValueGenerator(state.sources[0], 'blend', lfo1))
    .blend(src(o2), getValueGenerator(state.sources[1], 'blend', lfo1))
    .diff(solid(0, 0, 0, 0).blend(src(o1), getValueGenerator(state.sources[0], 'diff', lfo1)))
    .diff(solid(0, 0, 0, 0).blend(src(o2), getValueGenerator(state.sources[1], 'diff', lfo1)))
    .out(o0);
}
