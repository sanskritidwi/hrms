
import React from 'react'
import { useState } from 'react'
import Notification from '../assets/images/notification.svg'
 const Dropdown = ({notificationItem}) => {
    console.log(notificationItem)
    const [notification, setNotification] = useState(false)

    const renderDropdown = () => {
        if(!notification) return null;
            return(
                <>
                    <div className="Dropdown-wrapper">
                        {renderList()}
                    </div>
                </>
            )
    }
    const renderList = () => {
        return(
            <>
                <ul>
                    {
                        notificationItem.map((data) => {
                            console.log(data)
                            return(
                                <>
                                    <li>
                                        {data.type}
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
            <button onClick={() => setNotification(!notification)}>
                <img src={Notification} />
            </button>
            {renderDropdown()}
        </>
    )
}

export default Dropdown;