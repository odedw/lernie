import p5 from 'p5';

export function run(w: number, h: number, canvas: HTMLElement) {
  let sketch = function (p: p5) {
    const predicates: ((x: number, y: number) => boolean)[] = [
      (x, y) => (x ^ y) % 7 > 0,
      (x, y) => (x ^ y) % 9 > 0,
      (x, y) => (x ^ y) % 4 > 0,
      (x, y) => (x ^ y) % 5 > 0,
    ];
    let currentPredicate = 0;
    const size = 150;
    p.setup = function () {
      p.createCanvas(w, h);
    };

    p.draw = function () {
      if (p.frameCount % 200 === 0) {
        currentPredicate = (currentPredicate + 1) % predicates.length;
      }
      if (p.frameCount % 10 === 0) {
        p.background(0);
      }
      if (p.frameCount % 2 === 0) {
        for (let x = 0; x < size; x++) {
          for (let y = 0; y < size; y++) {
            if (predicates[currentPredicate](x, y)) {
              p.rect(
                x * (p.width / size) + p.random(-1, 1),
                y * (p.width / size) + p.random(-1, 1),
                p.width / (size * 3),
                p.width / (size * 3)
              );
            }
          }
        }
      }
    };
  };

  new p5(sketch, canvas);
}
