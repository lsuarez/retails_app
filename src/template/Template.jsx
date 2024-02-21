import styled from 'styled-components';
import NavBar from '../navBar/NavBar';
import Main from '../main/Main';

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  background: red;
  min-height: 30vh;
`;
const Content1= styled.div`
  background: #a6b8b9;
  padding:0.25rem;
  flex:1;
`;
const Content2= styled.div`
  padding:0.25rem;  
  flex:1;
`;

const Footer= styled.footer`
  background:#ff9637;
  grid-area: footer;
  padding:0.25rem
  display:flex;
  align-items: center;
  justify-content:space-around;
  height: 76px;
  margin-top: auto;
`;


function Template() {
  return (
    <div>
     <NavBar />
     <Main/>
     <ContentBox>
        <Content1>Content1</Content1>
        <Content2>Content2</Content2>
        <Content1 >Content3</Content1>
     </ContentBox>
     <Footer>Footer hola liz desde el footer</Footer>
    </div>
  );
}

export default Template;