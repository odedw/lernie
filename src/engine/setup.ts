import { Input } from 'rmidi';
import { SourceState, Mapping, Parameter, ParameterMapping, SourceMapping, SourceType } from '../types';
import run from './run';
import { state } from './state';

const mapping: Mapping = require('../config/LaunchControlXL.json');

function bindParameter(i: Input, mapping: ParameterMapping, parameter: Parameter, ss: SourceState) {
  i.ccBind<Record<Parameter, number>>(mapping.cc, parameter, ss.parameters, mapping.min, mapping.max);
}

function bindSource(i: Input, mapping: SourceMapping, state: SourceState) {
  Object.keys(state.parameters).forEach((k) => {
    const key = k as Parameter;
    bindParameter(i, mapping.parameters[key], key, state);
  });
  i.noteOn(undefined, mapping.switchSource.channel).subscribe((evt) => {
    if (evt.note.number === mapping.switchSource.note) {
      state.sourceType = ((Number(state.sourceType) + 1) % Object.keys(SourceType).length) as SourceType;
      run();
    }
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
