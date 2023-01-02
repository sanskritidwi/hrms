import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SideMenu from "./SideMenu";
import '../styles/css/all.css'
import icon from '../assets/images/item.svg'
import arrow from '../assets/images/arrow.svg'
import Dropdown from './Dropdown';
import { Navbar } from './Navbar';
import { EventCard } from './EventCard';
import Input from './FormFields/Input';
import { AttendanceEmployee } from './AttendanceEmployee';
import ProgressBar from './progressBar';


export const KavitaCanvas = () => {
  const renderBody=()=>{
    return(
        <div>30 June 2022</div>
    )
}

 

return (
<>
   {/* <Navbar /> */}
   {/* <SideMenu listMenu={sideItem}/> */}
   <EventCard title="Upcoming Events" renderBody={renderBody}/>
   <Input />
   <AttendanceEmployee />

   {/* <input id="start" value="10:00" />
    <input id="end" value="06:30" /> */}
    <input id="diff" />
</>
);
}
