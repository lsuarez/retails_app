import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-right: 5px;
  font-weight: bold;
  font-size: small;
  font-family: Arial;
  color: ${props => props.invalid ? 'red' : 'black'};
`

export const StyledInput = styled.input`
  width: 91%;
  padding: 10px;
  border: 1px solid #ccc;
  fontFamily: Arial;
`
export const StyledInputSmall = styled.input`
  display:flex;
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-right: 10px;
`
export const StyledSelect = styled.select`
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledButton = styled.button`
  background-color: black;
  justify-content: center;
  display:flex;
  align-items: center;
  width: 98%;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`
export const ColumnBox = styled.div`
    justify-content: center;
    display:flex;
    align-items: center;
    flex-direction: row;
    padding:0.50rem;


`
export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
  `;

  export const RowBox = styled.div`
    display:flex;
    flex-direction: column;
    padding:0.50rem;
`