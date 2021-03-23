const now = require('right-now');

export class LFO {
  div: number;
  constructor(div: number = 1) {
    this.div = div;
  }

  getValue() {
    return (Math.sin(now() / this.div) + 1) / 2; // 0 to 1
  }
}
