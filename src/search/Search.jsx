import React,{useCallback, useMemo} from 'react';
import Select from "../components/Select";
import { StyledForm, StyledInput, StyledButton, StyledAlert, StyledLabel, StyledInputSmall,ColumnBox } from './FormComponents';

function Search() {
    const [city, setCity] = React.useState('');
    const [area, setArea] = React.useState('');
    const [error, setError] = React.useState(false);
    const [upTo, setUpto] = React.useState('');
    const porpuse = [
        "Rent",
        "Sale"
    ];
    const [forSelected, setForSelected] = React.useState(porpuse[0]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (area.length < 3) {
            setError(true);
        } else {
            setError(false);
        }
        console.log("Area:"+area+ " city:"+city+" upto:"+ upTo+ " selectFor:"+forSelected);
    }

 
    const cityEntered = useCallback((e)=> {
        setCity(e.target.value);
    },[])

    const areaEntered = useMemo(()=>  (e) => 
        setArea(e.target.value)
    );
    function uptoEntered(e){
        setUpto(e.target.value);
    }

    const handleSelectFor=(value )=>{
        setForSelected(value);
    };

    return (
          
             <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>City</StyledLabel>
                <StyledInput  
                    type="text" 
                    value={city} 
                    onChange={cityEntered}
                />
                <StyledLabel >Area</StyledLabel>
                <StyledInput  type="area" value={area} onChange={ areaEntered} />
            {error && <StyledAlert>area is invalid.</StyledAlert>}
                <ColumnBox>
                    <StyledLabel>Up To</StyledLabel>
                    <StyledInputSmall key="upto"  type="number" value={upTo} onChange={uptoEntered} />
                    <StyledLabel>For</StyledLabel>
                    <Select 
                    values={porpuse} 
                    onChange={(v)=>handleSelectFor(v)}/>
                </ColumnBox>
                <StyledButton type="submit" disabled={!city || !area}>Search</StyledButton>
            </StyledForm>
   
    );
}
export default Search;