import styled from 'styled-components';
import background from '../img/main.png';
import Search from '../search/Search';

const Background = styled.main`
  
display: flex;
justify-content: center;
align-items:center;
background: url(${background});
height: 300px;
position: relative;
 
`;
 
function Main(){
    return (
        <Background>
            <Search/>
        </Background>
    );
}
export default Main;