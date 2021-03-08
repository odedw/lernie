export class LFO {
  //   constructor() {}

  getValue(time: number) {
    return (Math.sin(time / 5) + 1) / 2;
  }
}
