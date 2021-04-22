import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import Hydra from './components/Hydra';
import styled from 'styled-components';
import { engine } from './engine/engine';
import Scope from './components/Scope';
import P5 from './components/P5';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

function loadFile(evt: ChangeEvent<HTMLInputElement>) {
  if (evt.target.files && evt.target.files?.length > 0) {
    engine.loadProject(evt.target.files[0]);
  }
}
const FileDrop = styled.input`
  display: none;
`;

function App() {
  const [scopeEnabled, setScopeEnabled] = useState(true);
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    function keyPress(evt: KeyboardEvent) {
      const k = evt.key.toLowerCase();
      if (k === 's') {
        engine.saveProject();
      } else if (k === 'l') {
        document.getElementById('file-selector')?.click();
      } else if (k === 'r') {
        engine.randomize();
      } else if (k === 'i') {
        setScopeEnabled((enabled) => !enabled);
      }
    }

    window.addEventListener('keypress', keyPress);
  }, [setScopeEnabled]);
  useEffect(() => {
    engine.init().then(() => setInitialized(true));
  }, [setInitialized]);
  if (!initialized) {
    return null;
  }
  return (
    <Container>
      <Hydra />
      <P5 />
      <Scope enabled={scopeEnabled} />
      <FileDrop type="file" id="file-selector" accept=".json" onChange={(e) => loadFile(e)} />
    </Container>
  );
}

export default App;
