import React, { useState } from "react"
import { PageHeader } from "./PageHeader"
import ProgressBar from "./progressBar";
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function convertMsToHM(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    // 👇️ if seconds are greater than 30, round minutes up (optional)
    minutes = seconds >= 30 ? minutes + 1 : minutes;
  
    minutes = minutes % 60;
  
    // 👇️ If you don't want to roll hours over, e.g. 24 to 00
    // 👇️ comment (or remove) the line below
    // commenting next line gets you `24:00:00` instead of `00:00:00`
    // or `36:15:31` instead of `12:15:31`, etc.
    hours = hours % 24;
  
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  }
    const milliseconds = (h, m, s) => ((h*60*60+m*60+s)*1000);
    export const AttendanceEmployee = ({percentage}) => {
    let dt;
    let dt2;
    const handelTimeIn = () =>{
        dt = new Date().getTime();
        console.log(dt)
     }
     const handelTimeOut = () =>{
         dt2 = new Date().getTime();
         console.log(dt2)
     }
     const TotalTime = () =>{
        // let total =Math.round((dt2-dt) / 1000);
        var total = dt2 - dt
        let timeData = convertMsToHM(total)
        console.log(timeData)
        console.log(total)
        console.log( milliseconds(timeData), "dgjif")
     }
    const renderInput = (timeing) => {
        var timeStatus = timeing;
        return (
            <>
                <div className="d-flex align-items-center col-30">
                    <span>time {timeStatus} : </span>
                    {/* <button  className="btn btn-outline-dark text-capitalize" onClick={timeStatus==="In"? handelTimeIn: handelTimeOut}>mark {timeStatus}</button> */}
                </div>
            </>
        )
    }
    return (
        <>
            <div className="AttendanceEmployee">
                <div className="d-flex align-items-center col-30 justify-content-between px-2">
                    <PageHeader pageheading="Attendance" />
                    <button className="btn btn-dark text-capitalize dayStatus-btn">Working Day</button>
                </div>
                <div className="d-flex align-items-center col-30 justify-content-between px-3">
                <button  className="btn btn-outline-dark text-capitalize" onClick={handelTimeIn}>mark in</button>
                <button  className="btn btn-outline-dark text-capitalize" onClick={handelTimeOut}>mark out</button>
                <button  className="btn btn-outline-dark text-capitalize" onClick={TotalTime}> calculator</button>
                    {/* {renderInput("In")}
                    {renderInput("Out")} */}
                    <div className="d-flex align-items-center col-30">
                        <span>break duration: </span>
                        <button className="btn btn-outline-dark text-capitalize">mark </button>
                    </div>
                    <div style={{maxWidth:"380px", width:"100%",}}>
                        <div className="d-flex align-items-center col-30 justify-content-between">
                            <span>Working hours</span>
                            {/* <span>{diff_hours(dt1, dt2)} hours</span> */}
                        </div>
                        <ProgressBar completed={percentage}  max={'09:00:00'} inTime="January 3, 2023 11:13:00" outTime="January 3, 2023 2:13:00"/>
                    </div> 
                </div>
            </div>
        </>
    )
}
// completed={percent}handelDate min={timeData}