import React, { useState } from "react";
import { FormProcessor } from "../../../common/FormFields/FormProcessor";
import { PageHeader } from "../../../common/PageHeader";
import NumCards from "./NumCards";

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


const formSchema = {
	submitEnable: "true",
	submitText:"Apply",
	schema: [
		{
			type: "dropdown",
			schema: {
				header: "Leave Type",
				options: ["Comp Off", "Sick Leave", "Planned Leave"],
				label: "Type of Leave",
			},
		},
		{
			type: "input",
			schema: {
				placeHolder: "Date",
				name: "startDate",
				id: "planet",
				type: "date",
				label: "Start Date",
			},
		},
		{
			type: "input",
			schema: {
				placeHolder: "input",
				name: "endDate",
				id: "planet",
				type: "date",
				label: "End Date",
			},
		},
		{
			type: "input",
			schema: {
				placeHolder: "Start typing here ..",
				name: "reason",
				id: "planet",
				type: "text",
				label: "Reason",
			},
		},
		
	],
};

const Leave = () => {
	const [newLeave, setNewLeave] = useState(false);

	const renderLeaveRecord = ()=>{
		if (newLeave) return null;
		return (<>
		<PageHeader pageheading="Leave" />
			<NumCards numArr={numArrSchema} />
			<button
				className="defaultButtonPrimary"
				onClick={() => {
					setNewLeave(true);
				}}>
				Apply for a new Leave
			</button>
		</>)
	}

	const renderApplyNew = () => {
		if (!newLeave) return null;
		return (
			<>
			<div className="d-flex align-items-center my-3">
			<div className="iconBlackBack my-3" onClick={()=>{setNewLeave(false);}}></div>
				<PageHeader pageheading="Leave Application" />
			</div>
				
				<FormProcessor schema={formSchema}/>
			</>
		);
	};

	return (
		<div className="LeaveWrapper pageBody">
			{renderLeaveRecord()}
			{renderApplyNew()}
		</div>
	);
};

export default Leave;
