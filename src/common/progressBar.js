import React from "react";
const ProgressBar = ( {completed, min ,max,inTime, outTime, getTime}) => {
  console.log(inTime)
  // console.log(outTime)
    // const {completed } = props;
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#05454E",
      borderRadius:50,
    }
    

    // const calculateHour = () => {
    //     let date = new Date()
    //     console.log(date.getTime())
        
    //     let dt2 = date.getTime("07:00:00")
    //     console.log(dt2, "jj")
    //     let diff = Math.round((dt2 - date.getTime()) / 1000)
    //     diff /= (60 * 60);
    //     return Math.abs(diff);
    // }
    // let percentage = (calculateHour(inTime)/9)*100;
    // console.log(percentage, "per")

    // const calculateHour = (dt2, dt1) => {
    //   let t = new Date()
    //   let dtl2 = t.dt2.getTime();
    //   console.log(dtl2, 'jhgj')
    //   let dtl1 = t.dt1.getTime();
    //   console.log(dtl1, 'njh')

    //   let diff =Math.round((dtl2 - dtl1) / 1000);
    //   diff /= (60 * 60);
    //   return Math.abs(diff);
    // }
    // let percentage = (calculateHour(inTime,outTime)/9)*100
     
    // function diff_hours(dt2, dt1) 
    // {
    // var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    // diff /= (60 * 60);
    // return Math.abs(Math.round(diff));
    // }
    // var dt1 = new Date();
    // var dt2 = new Date("January 2, 2023 11:13:00");
    // let percent = (diff_hours(dt1, dt2)/9)*100;


    return (
      <div className="ProgressBar">
        <div style={fillerStyles}>  
        </div>
      </div>
    );
  };
  
  export default ProgressBar;