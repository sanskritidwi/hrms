import React, { useState, useEffect, useMemo } from "react";
import { MonthWiseAttendance } from "../services/employee/attendance/MonthWiseAttendance";
import { Calendar } from "./Calendar";
import { CollectionList } from "./CollectionList";
import { EventCard } from "./EventCard";
import { FormProcessor } from "./FormFields/FormProcessor";
import OutsideClickHandler from "./OutsideClickHandler";

export const SansCanvas = () => {
	
	return (
		<div>
			{/* <CollectionList fields={["name", "place", "animal", "thing"]} />
			{/* <Calendar /> */}
			{/* <EventCard title="UpcomingEvents" renderBody={renderBody}/>
            <FormProcessor submitEnable={true} submitText="Submit"/>  */}
			<MonthWiseAttendance />
			{/* <OutsideClickHandler
				callbackFunction={() => {
					console.log("out");
				}}>
				<div style={{ border: "1px solid  black", padding: "25px" }}>
					SansCanvas
				</div>
			</OutsideClickHandler> */}
		</div>
	);
};
