import React, { useState } from 'react'

export const Input = ({sendData, name}) => {
    const [ipVal, setIpVal] = useState("");

    const handleChange = (e)=>{
      setIpVal(e.target.value);
    }
  

  return (
    <div>
        <input type="text"  onBlur={(e)=>{handleChange(e)}} name={name}/>
    </div>
  )
}


export default Input;