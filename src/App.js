
import Template from './template/Template';
import React, {useState} from 'react';
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  height: 100vh;
  background: white;
  flex:200px;
  flex-direction: column;
`;
function App() {
  return (
    <Container>
      <Template></Template>
    </Container>
  );
}


export default App;
