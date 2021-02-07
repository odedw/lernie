import React from "react";
import "./App.css";
import Hydra from "./components/Hydra";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Hydra />
    </Container>
  );
}

export default App;
