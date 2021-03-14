export class LFO {
  div: number;
  constructor(div: number = 1) {
    this.div = div;
  }

  getValue(time: number) {
    return (Math.sin(time / this.div) + 1) / 2; // 0 to 1
  }
}
