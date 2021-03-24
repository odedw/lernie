import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import streams from '../engine/streams';
import { SourceType } from '../types';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { engine } from '../engine';
import { LFOType } from '../engine/LFO';
// import LFO from './LFO';

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  bottom: 20vh;
  font-size: 5vh;
  text-shadow: 2px 2px 2px #111;
  // -webkit-text-stroke-width: 2px;
  // -webkit-text-stroke-color: #111;

  .text-1 {
    color: #dcf;
  }
  .text-2 {
    color: #dfc;
  }
`;
const LFOContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
const TextContainer = styled.div`
  top: 66vh;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
`;
const Text = styled.div``;
let timers: NodeJS.Timeout[] = [];
type Props = {
  enabled: boolean;
};
const Scope: React.FC<Props> = ({ enabled }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  // const [lfo1Value, setLfo1Value] = useState<number>(0);

  const show = useCallback(
    (text: string, force: boolean = false) => {
      const index = text.startsWith('2 - ') ? 1 : 0;
      const setText = [setText1, setText2][index];

      if (!enabled && !force) {
        return;
      }
      setText(text);
      if (timers[index]) {
        clearTimeout(timers[index]);
      }
      timers[index] = setTimeout(() => {
        setText('');
      }, 1000);
    },
    [setText1, setText2, enabled]
  );
  useEffect(() => {
    const sub = merge(
      streams.sourceTypeChange$.pipe(
        map(
          (sourceIndex) => `${sourceIndex + 1} - ${SourceType[engine.state.sources[sourceIndex].sourceType].toString()}`
        )
      ),
      streams.parameterValueChange$.pipe(map((e) => `${e.sourceIndex + 1} - ${e.parameter}: ${e.value.toFixed(2)}`)),
      streams.lfoDestinationValueChange$.pipe(
        map((e) => `${e.sourceIndex + 1} - LFO ${e.lfoIndex + 1} - ${e.parameter}: ${Math.floor(e.value * 100)}%`)
      ),
      streams.audioDestinationValueChange$.pipe(
        map((e) => `${e.sourceIndex + 1} - Audio - ${e.parameter}: ${Math.floor(e.value * 100)}%`)
      ),
      streams.loadPreset$.pipe(map((i) => `Load preset ${i + 1}`)),
      streams.savePreset$.pipe(map((i) => `Save preset ${i + 1}`)),
      streams.clearParameter$.pipe(
        map((e) => `${e.sourceIndex + 1} ${e.destination ? `- ${e.destination}` : ''}- ${e.parameter} cleared`)
      ),
      streams.lfoTypeChange$.pipe(map((e) => `LFO ${e.lfoIndex + 1} - ${LFOType[e.type]}`)),
      streams.lfoRateChange$.pipe(
        map(
          (e) => `LFO ${e.lfoIndex + 1} - ${e.rate < 1000 ? `${e.rate} ms` : `${(e.rate / 1000).toFixed(2)} seconds`}`
        )
      )
    ).subscribe(show);
    return () => sub.unsubscribe();
  }, [show]);
  useEffect(() => {
    show(`Scope ${enabled ? 'on' : 'off'}`, true);
  }, [enabled, show]);
  // useEffect(() => {
  //   setLfo1Value(engine.lfos[0].getValue());
  // });
  return (
    <Container>
      <TextContainer>
        <Text className="text-1">{text1}</Text>
        <Text className="text-2">{text2}</Text>
      </TextContainer>
      <LFOContainer>{/* <LFO value={lfo1Value} /> */}</LFOContainer>
    </Container>
  );
};
export default Scope;
