import React, { ChangeEvent, useEffect } from 'react';
import './App.css';
import Hydra from './components/Hydra';
import styled from 'styled-components';
import { engine } from './engine/engine';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

function keyPress(evt: KeyboardEvent) {
  const k = evt.key.toLowerCase();
  if (k === 's') {
    engine.saveProject();
  } else if (k === 'l') {
    document.getElementById('file-selector')?.click();
  } else if (k === 'r') {
    engine.randomize();
  } else if (k === '1') {
    engine.savePreset(0);
  } else if (k === '2') {
    engine.loadPreset(0);
  }
}

function loadFile(evt: ChangeEvent<HTMLInputElement>) {
  if (evt.target.files && evt.target.files?.length > 0) {
    engine.loadProject(evt.target.files[0]);
  }
}
const FileDrop = styled.input`
  display: none;
`;

function App() {
  useEffect(() => {
    window.addEventListener('keypress', keyPress);
    // window.addEventListener('drop', fileDrop);
    // setTimeout(() => {
    //   document.getElementById('file-selector')?.click();
    // }, 2000);
  }, []);
  return (
    <Container>
      <Hydra />
      <FileDrop type="file" id="file-selector" accept=".json" onChange={(e) => loadFile(e)} />
    </Container>
  );
}

export default App;
