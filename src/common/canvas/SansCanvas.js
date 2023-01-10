import React, { useState, useEffect, useMemo } from "react";
import NumCards from "../../services/employee/leave/NumCards";
import { MonthWiseAttendance } from "../../services/hradmin/attendance/MonthWiseAttendance";
import { CollectionList } from "../CollectionList";
import { EventCard } from "../EventCard";
import { FormProcessor } from "../FormFields/FormProcessor";
import OutsideClickHandler from "../OutsideClickHandler";
import Popup from "../Popup";
import { SearchBar } from "../SearchBar";

const SansCanvas = () => {
	const schema = {
		fields: ["Name", "Date applied", "Date Approved"],
		schema: [
			{ name: "sans", dateAp: "12/1/23", dateAr: "17/1/23" },
			{ name: "sans2", dateAp: "12/1/234", dateAr: "17/1/24" },
		],
	};
	const searchSchema = {
		placeholder :"searchh"
	  }
	  
	
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
			<SearchBar schema={searchSchema}/>
			
		</div>
	);
};

export default SansCanvas;
