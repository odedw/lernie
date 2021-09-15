import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import Hydra from './components/Hydra';
import styled from 'styled-components';
import { engine } from './engine/engine';
import Scope from './components/Scope';
import Settings from './components/Settings';
import { settings, storage } from './storage';
import init from './init';

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

function shouldShowSettings(): boolean {
  if (!storage.get(storage.keys.MIDI_INPUT)) {
    return true;
  }

  return false;
}

const InitializedApp = () => {
  const [scopeEnabled, setScopeEnabled] = useState(settings.scopeEnabled);
  const [settingsOpen, setSettingsOpen] = useState(shouldShowSettings());
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
        settings.scopeEnabled = !scopeEnabled;
        setScopeEnabled((enabled) => !enabled);
      } else if (k === '`') {
        setSettingsOpen((settingsOpen) => !settingsOpen);
      }
    }

    window.addEventListener('keypress', keyPress);
  }, [setScopeEnabled, scopeEnabled]);

  return (
    <Container>
      <Hydra />
      <Scope enabled={scopeEnabled} />
      {settingsOpen && <Settings />}
      <FileDrop type="file" id="file-selector" accept=".json" onChange={(e) => loadFile(e)} />
    </Container>
  );
};
function App() {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    init().then(() => setInitialized(true));
  }, [setInitialized]);
  return initialized ? <InitializedApp /> : null;
}

export default App;
