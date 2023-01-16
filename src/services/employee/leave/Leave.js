import React, { useState } from "react";
import { FormProcessor } from "../../../common/FormFields/FormProcessor";
import { PageHeader } from "../../../common/PageHeader";
import CollectionList from "../../../common/table/CollectionList";
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
	formEditable:"false",
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

const customRender = (status) => {
	switch (status){
		case 'approved' : return <div className="approved">Approved</div>;
		case 'declined' : return <div className="declined">Declined</div>;
		case 'pending' : return <div className="pending">Pending</div>;

	}
};

const tableSchema = {
	tHead: ["Date Time", "Date - From", "Date - To","Number of Days", "Reason", "Type of Leave",  "Status"],
	tData: [
		{
			id: "1",
			items: ["16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender("approved")],
		},
		{
			id: "2",
			items: ["16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender("declined")],
		},
		{
			id: "3",
			items: ["16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender("pending")],
		},
		{
			id: "2",
			items: ["16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender("declined")],
		},
		{
			id: "3",
			items: ["16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender("pending")],
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
			<div className="floatRight">
			<button
				className="defaultButtonPrimary"
				onClick={() => {
					setNewLeave(true);
				}}>
				Apply for a new Leave
			</button>
			</div>	
			<CollectionList schema={tableSchema}/>

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
