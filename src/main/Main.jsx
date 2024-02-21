import styled from 'styled-components';
import background from '../img/main.png';
const Background = styled.main`
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  background: url(${background});
  width: 100%;
  height: 450px;
`;

function Main(){
    return (
        <div>
            <Background/>
        </div>
    );
}
export default Main;