import React , {useState}from 'react'

const NumCards = ({numArr}) => {
  return (
    <div className='NumCardsWrapper'>
        
        {
            numArr.map((item, index)=>{
                return (
                    <div className='card' key={index}>
                        <div className='num'> {item.num}</div>
                        <div className='text'>{item.name}</div>
                       </div>

                )
            })
        }
       </div>
  )
}



  export default NumCards;