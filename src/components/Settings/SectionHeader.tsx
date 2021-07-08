import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;
const HeaderText = styled.div`
  font-weight: bold;
`;
const Separator = styled.div`
  height: 2px;
  width: auto;
  flex: 1;
  background-color: black;
  margin-left: 1rem;
`;

export const SectionHeader: React.FC = (props) => (
  <Container>
    <HeaderText>{props.children}</HeaderText>
    <Separator />
  </Container>
);
