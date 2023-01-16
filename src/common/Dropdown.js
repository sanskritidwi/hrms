// const notificationData = [
//     {
//       type:"reminder",
//       date: "12/10/2022",
//       time: "6:30PM",
//       content: "Today Kavita birthday"
//     },
//     {
//       type:"update",
//       date: "12/10/2022",
//       time: "6:30PM",
//       content: "update your settings"
//     }
//   ]
//  <Dropdown notificationItem={notificationData}/> 

import React from 'react'
import { useState } from 'react'
import Notification from '../assets/images/notification.svg'
import Reminder from '../assets/images/reminder.svg'
import Event from '../assets/images/celebration.png'
import OutsideClickHandler from './OutsideClickHandler'

const Dropdown = ({notificationItem}) => {
    const [notification, setNotification] = useState(false)
    const renderDropdown = () => {
        if(!notification) return null;
            return(
                <>
                    <div className='dropdown-list'>
                        {renderList()}
                    </div>   
                </>
            )
    }
    const renderList = () => {
        const renderNotification = (notification) => {
            switch(notification.type){
                case "reminder" :
                    return  <img src={Reminder} className="icon"/>
                case "update" : 
                    return <img src={Event} className="icon"/>
            }
        }
        return(
            <>
                <ul>
                    {
                        notificationItem.map((data) => {
                            console.log(data)
                            return(
                                <>
                                    <li>
                                        <div className='d-flex align-items-center col-20'>{renderNotification(data)}
                                        <p>{data.content}</p></div>
                                        <small className='d-block my-2 text-end'>{data.date} {data.time}</small>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </>
        )
    }    
    return(
        <>
         <OutsideClickHandler callbackFunction={() => setNotification(false)}>
            <div className="Dropdown-wrapper">
                <button style={{all : "unset"}} onClick={() => setNotification(!notification)}>
                    <img src={Notification} />
                </button>
                {renderDropdown()}
            </div>
        </OutsideClickHandler>
        </>
    )
}

export default Dropdown;