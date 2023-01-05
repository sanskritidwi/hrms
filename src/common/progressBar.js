import React, { useState , useEffect} from "react";
const ProgressBar = ( {inTime}) => {
    // console.log(inTime)
    const [currentTime, setCurrentTime] = useState('')
    const [worksHours, setWorksHours] = useState(0)
    const date = new Date();
    useEffect(() => {
      setTimeout(() => {
        setCurrentTime(date.getHours());
        calculator()
        
      }, 1000);
    }, [currentTime]);
    // console.log(currentTime)
    const fillerStyles = {
      height: '100%',
      width: `${worksHours}%`,
      backgroundColor: "#05454E",
      borderRadius:50,
    }

    const calculator = () => {
     const workHours = currentTime - inTime;
    //  console.log(workHours);
     const totalHour = (workHours/9)*100;
     console.log(totalHour,workHours,inTime, 'ghd')
     setWorksHours(totalHour)
    //  setWorksHours(totalHour)
    }

    return (
      <div className="ProgressBar">
        <div style={fillerStyles}>  
        </div>
      </div>
    );
  };
  
  export default ProgressBar;