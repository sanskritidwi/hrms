import React, { useState } from 'react'

export const Input = ({schema, editMode}) => {
  const {name, placeHolder, type,label, minlength, maxlength} = schema;
    const [ipVal, setIpVal] = useState("");

    const handleChange = (e)=>{
      setIpVal(e.target.value);
    }
  

  return (
    <div className={editMode ? "InputWrapper" : "InputWrapperDisabled"}>
      <label>{label}</label>
        <input type={type}  onBlur={(e)=>{handleChange(e)}} name={name} placeholder={placeHolder} minLength={minlength} maxLength={maxlength} disabled={!editMode}/>
    </div>
  );
}


export default Input;