export class LFO {
  //   constructor() {}

  getValue(time: number) {
    return (Math.sin(time) + 1) / 2; // 0 to 1
  }
}
