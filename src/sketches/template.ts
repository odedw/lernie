import p5 from 'p5';

export function run(w: number, h: number, canvas: HTMLElement) {
  let sketch = function (p: p5) {
    p.setup = function () {
      p.createCanvas(w, h);
    };

    p.draw = function () {};
  };

  new p5(sketch, canvas);
}
