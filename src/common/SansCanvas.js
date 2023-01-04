import React, { useState, useEffect, useMemo } from "react";
import { MonthWiseAttendance } from "../services/hradmin/attendance/MonthWiseAttendance";
import { Calendar } from "./Calendar";
import { CollectionList } from "./CollectionList";
import { EventCard } from "./EventCard";
import { FormProcessor } from "./FormFields/FormProcessor";
import OutsideClickHandler from "./OutsideClickHandler";

export const SansCanvas = () => {

	const customRenderList = ()=>{
		return <></>
	}

	const collectionSchema = {
		customRender : customRenderList(),
		title:"modalCanvas"

	}
	
	return (
		<div>
			{/* <Calendar /> */}
			{/* <EventCard title="UpcomingEvents" renderBody={renderBody}/>
            <FormProcessor submitEnable={true} submitText="Submit"/>  */}
			{/* <MonthWiseAttendance /> */}
			{/* <OutsideClickHandler
				callbackFunction={() => {
					console.log("out");
				}}>
				<div style={{ border: "1px solid  black", padding: "25px" }}>
					SansCanvas
				</div>
			</OutsideClickHandler> */}
			{/* <CollectionList schema={collectionSchema}/> */}
			<FormProcessor />
		</div>
	);
};
