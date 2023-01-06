import React, { useState } from 'react'

export const Input = ({schema}) => {
  const {name, placeHolder, type,label} = schema;
    const [ipVal, setIpVal] = useState("");

    const handleChange = (e)=>{
      setIpVal(e.target.value);
    }
  

  return (
    <div className='InputWrapper'>
      <label>{label}</label>
        <input type={type}  onBlur={(e)=>{handleChange(e)}} name={name} placeholder={placeHolder}/>
    </div>
  );
}


export default Input;