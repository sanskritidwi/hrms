import React, { useState, useEffect, useMemo } from "react";
import { Table } from "react-bootstrap";
import NumCards from "../../services/employee/leave/NumCards";
import { MonthWiseAttendance } from "../../services/hradmin/attendance/MonthWiseAttendance";
import { EventCard } from "../EventCard";
import { FormProcessor } from "../FormFields/FormProcessor";
import OutsideClickHandler from "../OutsideClickHandler";
import Popup from "../Popup";
import { SearchBar } from "../SearchBar";
import TableHead from "../table/TableHead";
import Tabcustom from "../Tabs";
import Tabs from "../Tabs";
import CollectionList from "../table/CollectionList";

const SansCanvas = () => {
	const schema = {
		fields: ["Name", "Date applied", "Date Approved"],
		schema: [
			{ name: "sans", dateAp: "12/1/23", dateAr: "17/1/23" },
			{ name: "sans2", dateAp: "12/1/234", dateAr: "17/1/24" },
		],
	};
	const searchSchema = {
		placeholder: "searchh",
	};

	const tabData = [
		{
			id: "pd",
			title: "Personal Details",
			keyevent: "pd",
			body: () => <div>HHIII</div>,
		},
		{
			id: "document",
			title: "Documents",
			keyevent: "document",
			body: () => <div>HHIII2</div>,
		},
		{
			id: "pde",
			title: "Personal Details",
			keyevent: "pd3",
			body: () => <div>HHIII3</div>,
		},
	];

	let arr = [2, 3, 7, 9, 10, 12, 13, 1, 4, 6, 5];
	arr.sort((a, b) =>{ 
		console.log(a,b);
		console.log(a-b)
		return a - b});
	console.log(arr);
	return (
		<div>
			{/* <Calendar /> */}
			{/* <EventCard title="UpcomingEvents" renderBody={renderBody}/> */}
			{/* <FormProcessor schema={formfield} nameone={selectSchema} submitEnable={true} submitText="Submit" /> */}
			{/* <MonthWiseAttendance /> */}
			{/* <OutsideClickHandler
				callbackFunction={() => {
					console.log("out");
				}}>
				<div style={{ border: "1px solid  black", padding: "25px" }}>
					SansCanvas
				</div>
			</OutsideClickHandler> */}
			{/* <CollectionList /> */}
			{/* <FormProcessor /> */}
			{/* <SearchBar schema={searchSchema}/> */}
			{/* <CollectionList schema={schema} /> */}
			{/* <Calendar /> */}
			{/* <EventCard title="UpcomingEvents" renderBody={renderBody}/> */}
			{/* <FormProcessor submitEnable={true} submitText="Submit"/> */}
			{/* <SearchBar schema={searchSchema}/> */}
			{/* <Tabcustom tabData={tabData} /> */}
			{/* <div
				style={{ border: "1px solid red" }}
				draggable
				onDrag={(e) => {
					console.log(e.target);
				}}>
				Draggable
			</div>
			<div
				style={{
					border: "1px solid blue",
					minHeight: "100px",
					minWidth: "100px",
				}}
				onDragOver={(e) => {
					console.log(e.target);
				}}>
				Droppable
			</div> */}
			<CollectionList/>
		</div>
	);
};

export default SansCanvas;
