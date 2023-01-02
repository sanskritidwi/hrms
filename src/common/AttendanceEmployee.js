import React from "react"
import { PageHeader } from "./PageHeader"
import ProgressBar from "./progressBar";
export const AttendanceEmployee = () => {
    const renderInput = (timeing) => {
        var timeStatus = timeing;
        return (
            <>
                <div className="d-flex align-items-center col-30">
                    <span>time {timeStatus} : </span>
                    <button className="btn btn-outline-dark text-capitalize">mark {timeStatus}</button>
                </div>
            </>
        )
    }
    function diff_hours(dt2, dt1) 
    {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
    }
    var dt1 = new Date();
    var dt2 = new Date("January 2, 2023 11:13:00");
    let percent = (diff_hours(dt1, dt2)/9)*100;
    return (
        <>
            <div className="AttendanceEmployee">
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
                            <span>{diff_hours(dt1, dt2)} hours</span>
                        </div>
                        <ProgressBar completed={percent}/>
                    </div>
                </div>
            </div>
        </>
    )
}