import background from '../img/house1.png'; 
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import { RowBox, StyledLabel ,ColumnBox} from '../search/FormComponents';
const imgStyle = {
  
    width: "98%",
    height: "130px",
    margin: "5px",
    position: "relative"
    };
const iconStyle = {
  
    width: "40px",
    height: "40px",
    margin: "10px",
    position: "relative"
    };
const lableStyle = {
    margin: "10px",
    position: "relative"
    };
const Details = ({  price, m2, totalM2, bedrooms}) => {
  

return (

        <div> 
            <img src={background} style={imgStyle}/>
            <RowBox>
            <StyledLabel>{price}</StyledLabel>
            <ColumnBox>
                <img src={icon1} style={iconStyle} alt='1'/>
                <img src={icon2} style={iconStyle} alt='2'/>
                <img src={icon3} style={iconStyle} alt='3'/>
            </ColumnBox>
            <ColumnBox>
            <StyledLabel style={lableStyle} >{m2} m2 </StyledLabel>
            <StyledLabel style={lableStyle}>{totalM2} m2</StyledLabel>
            <StyledLabel style={lableStyle}>{bedrooms}</StyledLabel>
            </ColumnBox>
            </RowBox>
        </div> 

);
}
export default Details;