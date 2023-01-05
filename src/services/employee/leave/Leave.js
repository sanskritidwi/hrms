import React from "react";
import { PageHeader } from "../../../common/PageHeader";
import { NumCards } from "./NumCards";

const numArrSchema = [
	{
		name: "Leaves Used",
		num: "4",
	},
	{
		name: "Leaves Left",
		num: "4",
	},
];

const Leave = () => {

  const renderApplyNew = ()=>{
    return(<><PageHeader pageheading="Leave Application" /></>)
  }

	return (
		<div className="LeaveWrapper pageBody">
			<PageHeader pageheading="Leave" />
			<NumCards numArr={numArrSchema} />
      <button className="defaultButton">Apply for a new Leave</button>
      {renderApplyNew()}
		</div>
	);
};


export default Leave;