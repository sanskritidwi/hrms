import React, { useState, useEffect, useMemo } from "react";
import { MonthWiseAttendance } from "../services/hradmin/attendance/MonthWiseAttendance";
import { Calendar } from "./Calendar";
import { CollectionList } from "./CollectionList";
import { EventCard } from "./EventCard";
import { FormProcessor } from "./FormFields/FormProcessor";
import OutsideClickHandler from "./OutsideClickHandler";

export const SansCanvas = () => {

	const customRenderList = () => {
		return <></>
	}

	const collectionSchema = {
		customRender: customRenderList(),
		title: "modalCanvas"

	}
	const formfield = {
		input: 'text',
	}


	const dropdownselect = () => {
		return (
			<>
				<select>
					<option>option 1</option>
					<option>option 2</option>
					<option>option 3</option>
					<option>option 4</option>
				</select>
			</>
		)
	}

	const selectSchema = {
		customRender: dropdownselect(),
	}

	return (
		<div>
			{/* <Calendar /> */}
			{/* <EventCard title="UpcomingEvents" renderBody={renderBody}/> */}
			<FormProcessor schema={formfield} nameone={selectSchema} submitEnable={true} submitText="Submit" />
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
		</div>
	);
};
