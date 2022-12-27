import React from 'react'
import SideMenu from "./SideMenu";
import '../styles/css/all.css'
import icon from '../assets/images/item.svg'
import arrow from '../assets/images/arrow.svg'
import Dropdown from './Dropdown';

export const KavitaCanvas = () => {
  const sideItem = [
    {
        title: 'Dashboard',
        activeicon: arrow,
        defaulticon: icon,
        path: '',
        child: [
            {
                title: 'Dashboard1',
                activeicon: arrow,
                defaulticon: icon,
                path: '',
            },
            {
                title: 'Dashboard2',
                activeicon: arrow,
                defaulticon: icon,
                path: '',
            },
            {
                title: 'Dashboard3',
                activeicon: arrow,
                defaulticon: icon,
                path: '',
            }
        ]
    },
    {
        title: 'About',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'Service',
        activeicon: arrow,
        defaulticon: icon,
        path: '',
        child: [
            {
                title: 'Service1',
                activeicon: arrow,
                defaulticon: icon,
                path: '',
            },
            {
                title: 'Service2',
                activeicon: arrow,
                defaulticon: icon,
                path: '',
            },
            {
                title: 'Service3',
                activeicon: arrow,
                defaulticon: icon,
                path: '',
            }
        ]
    },
  ]

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

return (
<>
{/* <SideMenu listMenu={sideItem}/> */}
  <Dropdown notificationItem={notificationData}/>
</>
);
}
