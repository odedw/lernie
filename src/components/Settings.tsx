import React from 'react';
import styled from 'styled-components';
import WebMidi from 'webmidi';
import { settings, storage } from '../storage';
import { SectionHeader } from './Settings/SectionHeader';

const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: #eeeeee88;
  padding: 20%;
`;

const MidiInputItem = styled.div`
  line-height: 2;
`;
const MidiInputSelectionContainer = styled.div``;
const Settings: React.FC = () => {
  const [selectedInput, setSelectedInput] = React.useState(storage.get(storage.keys.MIDI_INPUT));

  return (
    <Container>
      <MidiInputSelectionContainer>
        <SectionHeader>MIDI Input</SectionHeader>
        {WebMidi.inputs.map((i) => (
          <MidiInputItem key={i.name}>
            <input
              type="radio"
              id={i.name}
              name="midi-input"
              value="HTML"
              checked={i.name === selectedInput}
              onChange={() => {
                settings.midiInput = i.name;
                setSelectedInput(i.name);
              }}
            />
            <label htmlFor={i.name}>{i.name}</label>
          </MidiInputItem>
        ))}
      </MidiInputSelectionContainer>
    </Container>
  );
};

export default Settings;
