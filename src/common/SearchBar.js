import React from 'react'

export const SearchBar = ({schema}) => {
    const{placeHolder} = schema;
  return (
    <div className='SearchBarWrapper'>
        <input placeholder={placeHolder}/>
        <div className='iconBlackSearch'></div>
    </div>
  )
}
