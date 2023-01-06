/*

caller 

const searchSchema = {
  placeholder :"searchh"
}

<SearchBar schema={serachSchema}/>
*/


import React from 'react'

export const SearchBar = ({schema}) => {
    const{placeHolder} = schema;
  return (
    <div className='SearchBarWrapper defaultButtonWhite'>
        <input placeholder={placeHolder}/>
        <div className='iconBlackSearch'></div>
    </div>
  )
}
