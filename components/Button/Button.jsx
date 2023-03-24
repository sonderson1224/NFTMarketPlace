import React from 'react';

// INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({btnText, handleClick}) => {
  return (
    <div className={Style.box}>
      <div className={Style.button} onClick={() => handleClick()} >
        {btnText}
      </div>
    </div>
  )
}

export default Button
