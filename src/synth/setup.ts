import { listInputs } from "rmidi";
export default function setup() {
  //midi
  // listInputs();
  //   Input.create("Launch Control XL").then((i) => {
  //     this.input = i;
  //     this.bindOsc(this.d.sources[0], config.sources[0]);
  //     this.bindOsc(this.d.sources[1], config.sources[1]);
  //   });
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
