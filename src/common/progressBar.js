import React from "react";
const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#05454E",
      borderRadius:50,
    }

  
    return (
      <div className="ProgressBar">
        <div style={fillerStyles}>  
        </div>
      </div>
    );
  };
  
  export default ProgressBar;