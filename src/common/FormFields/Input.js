import React, { useState } from 'react'

export const Input = ({placeholder, maxLength, minLength, isRequired, changeHandler}) => {
    // const [userInput, setUserInput] = useState("");
// export const Input = ({changeHandler}) => {
//     const [error, setError] = useState("");


    // const renderError=()=>{
    //     if(error==="") return null;
    //     return(
    //         <div>{error}</div>
    //     )
    // }

  

  return (
    <div>
        <input type="text"  onChange={changeHandler}/>
        {/* {renderError()} */}
    </div>
  );
}


export default Input;