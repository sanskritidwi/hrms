import React, { useState } from 'react'

export const Input = ({placeholder, maxLength, minLength, isRequired, changeHandler}) => {
    // const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    // const handleInput=(e)=>{
    //     if(e.target.value===""){
    //         console.log("is req");
    //         setError("Required Field");
    //     }else{
    //         console.log(e.target.value);
    //         setUserInput(e.target.value);
    //     }
    // }


    const renderError=()=>{
        if(error==="") return null;
        return(
            <div>{error}</div>
        )
    }
    // const renderSubmit = () => {
    //     if (!submitEnable) return null;
    //     return (
    //         <button type='submit' onClick={send}>{submitText}</button>
    //     );
    // }
  

  return (
    <div>
        <input type="text" placeholder={placeholder} onChange={changeHandler}  maxLength={maxLength} minLength={minLength}/>
        {/* <button onClick={send}>send</button> */}
        {/* {renderSubmit()} */}
        {renderError()}
    </div>
  )
}


export default Input;