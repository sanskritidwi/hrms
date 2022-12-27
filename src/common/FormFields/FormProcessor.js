import React from 'react'
import { Input } from './Input'

export const FormProcessor = ({schema, submitEnable, submitText}) => {


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form Submitted")
    }

    const renderSubmit = ()=>{
        if(!submitEnable) return null;
        return (
            <button type='submit'>{submitText}</button>
        )
    }


  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <Input/>
        {renderSubmit()}
        </form>
        </div>
       
  )
}
