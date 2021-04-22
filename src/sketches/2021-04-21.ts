import p5 from 'p5';

export function run(w: number, h: number, canvas: HTMLElement) {
  let sketch = function (p: p5) {
    let model: any;
    let angle = 0.3;
    let orientation = -1;
    p.setup = function () {
      p.createCanvas(w, h, this.WEBGL);
      model = p.loadModel('https://raw.githubusercontent.com/solsarratea/hydra-p5-models/main/models/wom.obj', true);
    };

    p.draw = function () {
      p.background(0);
      p.ambientLight(200, 80, 30);
      p.ambientMaterial(250);
      p.directionalLight(70, 250, 200, 0, -2.5, -1.2);
      p.translate(orientation * 200, 20, 0);
      p.rotateY(1.2 * angle);
      //  p.rotateZ(p.angle * 0.7);
      p.rotateX(91);
      p.scale(5, 5, 5);
      angle += 0.001;
      p.model(model);
    };
  };

  new p5(sketch, canvas);
}
