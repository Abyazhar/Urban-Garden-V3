import React from 'react';
import './styles.scss';

const STYLES= ['btn--primary', 'btn--outline','btn--cart','FormButton','FormContact']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile','btn--wide']
const COLOR = ['primary','blue','purple', 'green']

export const Button = ({ 
  //exporting button function we are tageting
  children, 
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  ...otherProps }) => {

    const checkButtonStyle =STYLES.includes (buttonStyle) ? //value pass ovr func btn = check if btncreated has a btnStyle 
    buttonStyle
     : STYLES[0]; //==1st position in STYLES::if want spec btn-outline jst define down here 
    const checkButtonSize =SIZES.includes (buttonSize) ? //value pass ovr func btn = check if btncreated has a btnStyle 
    buttonSize
     : SIZES[0];
    const checkButtonColor =COLOR.includes (buttonColor) ? //value pass ovr func btn = check if btncreated has a btnStyle 
    buttonColor
     : null; //shouldnt target the color should be null



  return (
    <button  className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}{...otherProps} onClick={onClick}
    type ={type}>
      {children}
    </button>
  );
}

export default Button