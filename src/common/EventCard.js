
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
    <div className='EventCardWrapper'>

        <div className='heading'>{title}</div>
        {renderBody()}
    </div>
  )
}
