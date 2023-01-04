import React from "react"
import Logo from '../assets/images/hrm-logo.png'
import Dropdown from "./Dropdown"
import User from '../assets/images/user.svg'
export const Navbar = () => {
    const notificationData = [
            {
              type:"reminder",
              date: "12/10/2022",
              time: "6:30PM",
              content: "Today Kavita birthday"
            },
            {
              type:"update",
              date: "12/10/2022",
              time: "6:30PM",
              content: "update your settings"
            }
          ]
    return(
        <>
            <header>
                <div className="container-fluid px-lg-4 px-md-2 px-sm-0 px-0">
                   <div className="d-flex align-items-center justify-content-between col-20">
                        <a href="#"><img src={Logo} /></a> 
                        <div className="d-flex align-items-center col-20">
                        <Dropdown notificationItem={notificationData}/>
                            <img src={User} />
                        </div>
                   </div>
                </div>
            </header>
        </>

    )
}