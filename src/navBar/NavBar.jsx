import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';

const NavBar2 = styled.nav`
  background: white;
  padding:0.25rem;
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
    background-color: #04AA6D; /* Green */
    color: white;
    border: none;
    padding: 15px 30px;
    text-align: center;
    font-size: 16px;
    flex :1;
`;
let opt =[ { text: 'Buy', index:'1', isSelected:true}, 
{text:'Rent', index:'2', isSelected:false},
{text: 'Sell', index:'3', isSelected:false}, 
{text: 'My Account', index:'4', isSelected:false}];

export default function NavBar(){
  
  const [options,setOptions] = useState(opt);



function onOptionClick(option){
    const newOptions=  options.map(op=> {
      if(op.isSelected ===true){
        op.isSelected=false;
      }
      if(op.text === option.text){
        op.isSelected=true;
      }
      return op;
    });
    setOptions(newOptions);
};

return (
       <NavBar2>
        {options.filter(option=>!option.isSelected).map((option)=> (
            <Button key={option.index} onClick={() => onOptionClick(option)}>{option.text} </Button>
        ))}
       </NavBar2>
    );
}

  
