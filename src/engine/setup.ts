import { Input } from 'rmidi';
import { SourceState, Mapping, Parameter, MidiCCBinding, SourceMapping, SourceType, Level } from '../types';
import run from './run';
import { state } from './state';
import { generateDefaultSourceState } from './state/defaultSourceState';

const mapping: Mapping = require('../config/LaunchControlXL.json');

function bindParameter(i: Input, mapping: MidiCCBinding, parameter: Parameter, ss: SourceState) {
  i.ccBind<Record<Parameter, number>>(mapping.cc, parameter, ss.parameters, mapping.min, mapping.max);
}
function bindLevel(i: Input, mapping: MidiCCBinding, level: Level, ss: SourceState) {
  i.ccBind<Record<Level, number>>(mapping.cc, level, ss.levels, mapping.min, mapping.max);
}

function bindSource(i: Input, mapping: SourceMapping, ss: SourceState) {
  Object.keys(ss.parameters).forEach((k) => {
    const key = k as Parameter;
    bindParameter(i, mapping.parameters[key], key, ss);
  });

  Object.keys(ss.levels).forEach((k) => {
    const key = k as Level;
    bindLevel(i, mapping.levels[key], key, ss);
  });

  // switch source
  i.noteOn(mapping.switchSource.note, mapping.switchSource.channel).subscribe(() => {
    ss.sourceType = ((Number(ss.sourceType) + 1) % Object.keys(SourceType).length) as SourceType;
    run();
  });

  // reset
  i.noteOn(mapping.reset.note, mapping.reset.channel).subscribe(() => {
    const defaultState = generateDefaultSourceState();
    // copy parameters default state
    Object.keys(ss.parameters).forEach((k) => {
      const key = k as Parameter;
      ss.parameters[key] = defaultState.parameters[key];
    });
    run();
  });
}

function keyDown(e: KeyboardEvent) {
  if (e.code === 'KeyR') {
    state.randomize(mapping.sources[0]);
  }
}

export default function setup() {
  //midi
  // listInputs();
  Input.create('Launch Control XL').then((i) => {
    bindSource(i, mapping.sources[0], state.sources[0]);
    bindSource(i, mapping.sources[1], state.sources[1]);
    // i = i;
    // this.bindOsc(this.d.sources[0], config.sources[0]);
    // this.b indOsc(this.d.sources[1], config.sources[1]);
  });

  // patch memory
  // Input.create('loopMIDI Port').then((i) => {
  //   this.bufferInput = i;
  //   this.bufferInput.noteOn(null, 1).subscribe((evt) => {
  //     log.info(evt.note);
  //     if (evt.note.number === 60) {
  //       this.d = this.dataBuffers[0];
  //       this.run();
  //     } else if (evt.note.number === 62) {
  //       this.d = this.dataBuffers[1];
  //       this.run();
  //     }
  //   });
  // });
  // load
  //   this.dataBuffers[0] = require("./Lernie/patches/2021-02-06_12_09_46.json");
  //   this.dataBuffers[1] = require("./Lernie/patches/2021-02-06_12_12_34.json");
  //   this.d = this.dataBuffers[0];
  // keyboard actions
  document.addEventListener('keydown', (e) => keyDown(e));
  // document.getElementById('file-input').addEventListener('change', readSingleFile, false);
}
