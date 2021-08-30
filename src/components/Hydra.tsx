import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { engine } from '../engine';
const Hydra = require('hydra-synth');

const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
`;

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasRun, setHasRun] = useState(false);
  useEffect(() => {
    if (canvasRef.current && !hasRun) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvasRef.current.width = w;
      canvasRef.current.height = h;
      const hydra = new Hydra({
        canvas: canvasRef.current,
        numOutputs: 5,
        // makeGlobal: false,
        //   precision: 'highp',
      });
      hydra.setResolution(w, h);
      engine.run(w / h);
      setHasRun(false);
    }
  }, [canvasRef, hasRun]);

  return <Canvas id="hydra-canvas" ref={canvasRef} />;
};
