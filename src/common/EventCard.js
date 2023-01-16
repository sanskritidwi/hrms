
/**
 * const renderBody=()=>{
    return(
        <div>30 June 2022</div>
    )
}

 * 
 * caller :
 * <EventCard title="UpcomingEvents" renderBody={renderBody}/>
 * 
 */


import React from 'react'

export const EventCard = ({title, renderBody}) => {
  return (
    <div className='EventCardWrapper custom-scroll wraped' >
        <div className='heading'>{title}</div>
        <div className='body'>{renderBody()}</div>
    </div>
  )
}
