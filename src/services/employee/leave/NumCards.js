import React from 'react'

export const NumCards = ({numArr}) => {
  return (
    <div className='NumCardsWrapper'>
        
        {
            numArr.map((item, index)=>{
                return (
                    <div className='card'>
                        <div className='num'> {item.num}</div>
                        <div className='text'>{item.name}</div>
                       </div>

                )
            })
        }
       </div>
  )
}
