import React, { useState } from 'react'
import { Input } from './Input'

export const FormProcessor = ({ schema, formfield }) => {
    const inputvalue = '';
    const [userInput, setUserInput] = useState("");
    // const [getValue, setgetValue] = useState("");
    // const getinput = (string) => {
    //     setgetValue(string);
    //     console.log(`value: ${getValue}`)
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form Submitted")
        console.log(userInput)
    }


    const changeHandler = (e) => {
        // userInput(e.target.value)
        setUserInput(e.target.value)
    }
    const send = () => {
        // setUserInput(inputvalue)
        inputvalue({setUserInput})
    }
    // console.log(userInput)


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} >
                <Input changeHandler={changeHandler} send={send} />
                <button onClick={send}>send</button>
                {/* {getValue} */}
            </form>
        </div>

    )
}


// const handleInput=(e)=>{
//     if(e.target.value===""){
//         console.log("is req");
//         setError("Required Field");
//     }else{
//         console.log(e.target.value);
//         setUserInput(e.target.value);
//     }
// }
