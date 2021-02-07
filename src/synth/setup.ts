import { Input, listInputs } from 'rmidi';
import { Mapping, ParameterMapping, SourceMapping } from '../types/mapping';
import { SourceState } from '../types/state';
import { state } from './state';
const mapping: Mapping = require('../config/LaunchControlXL.json');

// function bindParameter(i: Input, mapping: ParameterMapping, name: keyof SourceState, state: SourceState) {
//   i.ccBind<SourceState>(mapping.cc, name, state, mapping.min, mapping.max);
// }

function bindSource(i: Input, mapping: SourceMapping, state: SourceState) {
  Object.keys(state).forEach((k) => {
    // const key = k as keyof SourceState;
    // bindParameter(i, mapping[key], key, state);
  });
  // i.ccBind<SourceState>(mapping.mod1.cc, 'mod1', state, mapping.mod1.min, mapping.mod1.max);
  // i.ccBind<SourceState>(mapping.mod2.cc, 'mod2', state, mapping.mod2.min, mapping.mod2.max);
  // i.ccBind<SourceState>(mapping.mod3.cc, 'mod3', state, mapping.mod3.min, mapping.mod3.max);
  // i.ccBind<SourceState>(mapping.rotation.cc, 'rotation', state, mapping.mod1.min, mapping.mod1.max);
  // i.ccBind<SourceState>(mapping.kaleid.cc, 'kaleid', state, mapping.mod1.min, mapping.mod1.max);
  // i.ccBind<SourceState>(mapping.pixelate.cc, 'pixelate', state, mapping.mod1.min, mapping.mod1.max);
  // i.ccBind<SourceState>(mapping.scale.cc, 'scale', state, mapping.mod1.min, mapping.mod1.max);
  // i.ccBind<SourceState>(mapping.colorama.cc, 'colorama', state, mapping.mod1.min, mapping.mod1.max);
  // i.ccBind<SourceState>(mapping.modulate.cc, 'modulate', state, mapping.mod1.min, mapping.mod1.max);
  // i.ccBind<SourceState>(mapping.blendLevel.cc, 'blendLevel', state, mapping.mod1.min, mapping.mod1.max);
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
  //   document.addEventListener("keydown", (e) => this.keyDown(e));
  // document.getElementById('file-input').addEventListener('change', readSingleFile, false);
}
