import p5 from 'p5';

export function run(w: number, h: number, canvas: HTMLElement) {
  let sketch = function (p: p5) {
    p.setup = function () {
      p.createCanvas(w, h);
      p.background(0);

      for (let x = 0; x < 100; x++) {
        for (let y = 0; y < 100; y++) {
          if ((x ^ y) % 7) {
            p.rect(x * (p.width / 100), y * (p.width / 100), p.width / 200, p.width / 200);
          }
        }
      }
    };

    p.draw = function () {};
  };

  new p5(sketch, canvas);
}
