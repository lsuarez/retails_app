import React,{useCallback, useMemo, useRef} from 'react';
import styled from 'styled-components';
import { StyledForm, StyledInput, StyledButton, StyledAlert, StyledLabel, StyledInputSmall,ColumnBox } from './FormComponents';

function Search() {
    const [city, setCity] = React.useState('');
    const [area, setArea] = React.useState('');
    const [error, setError] = React.useState(false);
    const [enabled, setEnabled] = React.useState(false);
    const [upTo, setUpto] = React.useState('');
    const [forStr, setForStr] = React.useState('');
    const cityRef = useRef(null);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (area.length < 3) {
            setError(true);
        } else {
            setError(false);
        }
    }

 
    const cityEntered = useCallback((e)=> {
        console.log("Re render"+ e.target.value);
        setCity(e.target.value);
    },[])

    const areaEntered = useMemo(()=>  (e) => 
        setArea(e.target.value)
    );
    function uptoEntered(e){
        setUpto(e.target.value);
    }
    const forStrEntered = (e) => {
        setForStr(e.target.value);
    }
    const buttonEnabled = (city, area) => {
        if(city.length > 0 && area.length > 0) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }
    const Box = styled.div`
        background:white;
        flex-direction: column;
        padding:0.25rem
        align-items: center;
        justify-content:center;
        height: 20%;
        width: 30%;
    `;
    
    return (
            <Box>
             <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>City</StyledLabel>
                <StyledInput  
                    type="text" 
                    value={city} 
                    onChange={cityEntered}
                />
               
                <StyledButton type="submit" disabled={!city || !area}>Search</StyledButton>
            </StyledForm>
            </Box>
    );
}
export default Search;