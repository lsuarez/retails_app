

const styleSelect = {
    width: "80%",
    padding: "10px",
    border: "1px solid #ccc",
  };
const Select = ({  values, onChange, value }) => {

const handleChange =(value) =>{
    onChange(value);
};

return (

        <select id="select" onChange={(v)=>handleChange(v.target.value)}  style={styleSelect}>
            {values.map((value, index)=>(
                <option
                    key={index}
                    value={value}
                    >
                    {value}
                </option>
            ))}
        </select>

);
}
export default Select;