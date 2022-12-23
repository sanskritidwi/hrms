import React, { useState } from 'react'

export const Input = ({placeholder, maxLength, minLength, isRequired}) => {

    const [userInput, setUserInput] = useState();
    const [error, setError] = useState("");

    const handleInput=(e)=>{
        if(e.target.value===""){
            console.log("is req");
            setError("Required Field");
        }else{
            console.log(e.target.value);
            setUserInput(e.target.value);
        }
    }

    const renderError=()=>{
        if(error==="") return null;
        return(
            <div>{error}</div>
        )
    }
  

  return (
    <div>
        <input type="text" placeholder={placeholder} onBlur={(e)=>handleInput(e)} onChange={()=>setError("")} maxLength={maxLength} minLength={minLength}/>
        {renderError()}
    </div>
  )
}


export default Input;