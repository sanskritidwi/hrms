import React, { useEffect, useState } from "react"
import { PageHeader } from "../../../common/PageHeader"
import ProgressBar from "../../../common/progressBar";

    const AttendanceEmployee = () => {
        let date = new Date()
        const [timein, setTimein] = useState(0)
        const [time , setTime] = useState("00:00:00")
        const handelTimeIn = () => {
            // console.log(date.toLocaleTimeString())
            setTimein(date.getHours())
        }
        // useEffect(()=>{
        //     setTimeout(()=>{
        //         generateTime(timein)
                
        //     },1000)
        // },[time])
        setInterval(()=>{
            let tim = 0
            generateTime(tim)
            tim++
        },1000)
        function generateTime(timein){
            console.log(timein)
        var second = timein % 60;
        var minute = Math.floor(timein / 60) % 60;
        var hour = Math.floor(timein / 3600) % 60;
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        setTime(`${hour}:${minute}:${second}`)
    }
    const renderInput = (timeing) => {
        var timeStatus = timeing;
        return (
            <>
                <div className="d-flex align-items-center col-30">
                    <span>time {timeStatus} : </span>
                    <button  className="btn btn-outline-dark text-capitalize" onClick={handelTimeIn}>mark {timeStatus}</button>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="AttendanceEmployee mt-5 ">
                <div className="d-flex align-items-center col-30 justify-content-between px-2">
                    <PageHeader pageheading="Attendance" />
                    <button className="btn btn-dark text-capitalize dayStatus-btn">Working Day</button>
                </div>
                <div className="d-flex align-items-center col-30 justify-content-between px-3">
                    {renderInput("In")}
                    {renderInput("Out")}
                    <div className="d-flex align-items-center col-30">
                        <span>break duration: </span>
                        <button className="btn btn-outline-dark text-capitalize">mark </button>
                    </div>
                    <div style={{maxWidth:"380px", width:"100%",}}>
                        <div className="d-flex align-items-center col-30 justify-content-between">
                            <span>Working hours</span>
                            {/* <span>{diff_hours(dt1, dt2)} hours</span> */}
                        </div>
                        <ProgressBar inTime={timein}/>
                        <span>{time}</span>
                    </div> 
                </div>
            </div>
        </>
    )
}
// completed={percent}handelDate min={timeData}

export default AttendanceEmployee;