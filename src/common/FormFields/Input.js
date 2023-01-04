import React, { useState } from 'react'

const Input = ()=>{
    return(<>
    <input
                type="text"
                onBlur={(e) => {
                    // handleIpValue(e);
                }}
                // defaultValue={ipVal}
            />
    </>)
}


export default Input;