import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Square = styled.div<{ value: number }>`
  background-color: white;
  height: 30px;
  width: 30px;
  opacity: ${(props) => props.value};
`;

type Props = {
  value: number;
};
const LFO: React.FC<Props> = ({ value }) => {
  return (
    <Container>
      <Square value={value} />
    </Container>
  );
};

export default LFO;
