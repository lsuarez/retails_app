import styled from 'styled-components';
import NavBar from '../navBar/NavBar';
import Main from '../main/Main';
import Details from '../components/Details';
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  background: white;

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
let details =[
   { price: '2,000,000MXN', totalM2:'150', m2:'120', bedrooms:3}, 
  {price: '3,000,000MXN', totalM2:'200', m2:'1500', bedrooms:5},
  {price: '1,000,000MXN', totalM2:'110', m2:'90', bedrooms:2},
{ price: '1,500,000MXN', totalM2:'130', m2:'110', bedrooms:3}
];

function Template() {
  return (
    <div>
     <NavBar />
     <Main/>
     <ContentBox>
     {details.map((detail)=> {
       return (
         <Details price={detail.price} m2={detail.m2} totalM2={detail.totalM2} bedrooms={detail.bedrooms}></Details>
       );
     })}

     </ContentBox>
     <Footer>Footer hola liz desde el footer</Footer>
    </div>
  );
}

export default Template;