const now = require('right-now');

export enum LFOType {
  Sine = 0,
  Square,
  Triangle,
  Saw,
  ReverseSaw,
  SampleAndHold,
}
export class LFO {
  rate: number = 1000;
  type: LFOType = LFOType.Sine;
  snhTimestamp?: number;
  snhValue: number = 0;
  // constructor() {}

  getValue(): number {
    switch (this.type) {
      case LFOType.Sine:
        return this.sine();
      case LFOType.Square:
        return this.square();
      case LFOType.Triangle:
        return this.triangle();
      case LFOType.Saw:
        return this.saw();
      case LFOType.ReverseSaw:
        return this.reverseSaw();
      case LFOType.SampleAndHold:
        return this.sampleAndHold();
    }
  }
  sampleAndHold() {
    const timestamp = now();
    if (!this.snhTimestamp || timestamp - this.snhTimestamp > this.rate) {
      this.snhTimestamp = timestamp;
      this.snhValue = Math.random();
    }
    return this.snhValue;
  }
  reverseSaw() {
    return (now() % this.rate) / this.rate;
  }
  saw() {
    return 1 - (now() % this.rate) / this.rate;
  }
  triangle() {
    const val = now() % this.rate;
    return val <= this.rate / 2 ? val / (this.rate / 2) : (this.rate - val) / (this.rate / 2);
  }
  square() {
    return Math.floor((now() / this.rate) % 2);
  }
  sine() {
    return (Math.sin((now() * 2 * Math.PI) / this.rate) + 1) / 2; // 0 to 1
  }
}
