import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { engine } from '../engine';
import { SourceType } from '../types';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

const Text = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 20vh;
  font-size: 5vh;
  color: #ccc;
  text-shadow: 2px 2px 2px #111;
  // -webkit-text-stroke-width: 2px;
  // -webkit-text-stroke-color: #111;
`;
let timer: NodeJS.Timeout;
type Props = {
  enabled: boolean;
};
const Scope: React.FC<Props> = ({ enabled }) => {
  const [text, setText] = useState('');
  const show = useCallback(
    (text: string, force: boolean = false) => {
      if (!enabled && !force) {
        return;
      }
      setText(text);
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setText('');
      }, 1000);
    },
    [setText, enabled]
  );
  useEffect(() => {
    const sub = merge(
      engine.scopeSubjects.sourceTypeChange.pipe(map((t) => SourceType[t].toString())),
      engine.scopeSubjects.parameterChange.pipe(map((e) => `${e.parameter}: ${e.value.toFixed(2)}`))
    ).subscribe(show);
    return () => sub.unsubscribe();
  }, [show]);
  useEffect(() => {
    show(`Scope ${enabled ? 'on' : 'off'}`, true);
  }, [enabled, show]);
  return <Text>{text}</Text>;
};
export default Scope;
