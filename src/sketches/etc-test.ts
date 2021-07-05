import p5 from 'p5';
import { engine } from '../engine';

let circles = 20;

export function run(w: number, h: number, canvas: HTMLElement) {
  let sketch = function (p: p5) {
    p.setup = function () {
      p.createCanvas(w, h);
      p.frameRate(60);
      a.setBins(circles);
    };

    p.draw = function () {
      p.background(200);
      // //   color = etc.color_picker() #on knob4
      // let color = 'yellow';
      // // circles = int(etc.knob1*25)+1
      // circles = engine.state.sources[0].parameters['mod1'] * 25 + 1;
      // let space = 1280 / circles;
      // // offset = int(etc.knob2*30)
      // let offset = engine.state.sources[0].parameters['mod2'] * 30;
      // // y = int(etc.knob3*720)
      // let y = engine.state.sources[0].parameters['mod3'] * 720;
      // for (let i = 0; i < circles; i++) {
      //   let auDio = p.abs(a.fft[i] * 200);
      //   let r = auDio + offset;
      //   let ax = i * space + space / 2;
      //   p.fill(color).circle(ax, y, r);
      //   // pygame.gfxdraw.filled_circle(screen, ax, y, r, color);
      // }
      for (let i = 0; i < circles; i++) {
        seg(i);
      }
    };
    function seg(i: number) {
      let y0 = 0;
      let y1 = -a.fft[i] * 200;
      let x = i * 13 - 10;

      let linewidth = engine.state.sources[0].parameters['mod2'] * 10;
      let position = engine.state.sources[0].parameters['mod1'] * 720;
      let ballSize = engine.state.sources[0].parameters['mod3'] * 50;
      let color = 'magenta';

      p.fill(color)
        .strokeWeight(0)
        .circle(x, y1 + position, ballSize);
      p.strokeWeight(3)
        .strokeWeight(linewidth)
        .stroke(color)
        .line(x, y0 + position, x, y1 + position);
    }
  };

  new p5(sketch, canvas);
}
