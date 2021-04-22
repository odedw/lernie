import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { run } from '../sketches/2021-04-21';

const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
      setHasRun(false);
      run(w, h, canvasRef.current);
    }
  }, [canvasRef, hasRun]);

  return <Canvas id="p5-canvas" ref={canvasRef} />;
};
