import React, { useState, useEffect, useMemo } from "react";
import { Calendar } from "./Calendar";
import { CollectionList } from "./CollectionList";
import { EventCard } from "./EventCard";
import { FormProcessor } from "./FormFields/FormProcessor";
import OutsideClickHandler from "./OutsideClickHandler";

export const SansCanvas = () => {
	const data = [
		{
			date: "1january",
			employees: [
				{ id: "One", name: "sanskriti", status: "present" },
				{ id: "One", name: "dwivedi", status: "present" },
			],
		},
		{
			date: "2january",
			employees: [
				{ id: "One", name: "cubexo", status: "present" },
				{ id: "One", name: "ioi", status: "present" },
			],
		},
	];

	const makeColmns = () => {
		return ["1", "2", "3"];
	};

	const columns = useMemo(
		() => [
			{
				Header: "date",
				accessor: "employees",
				Cell: (props) => {
					console.log(props.data);
					const sampleTable = props.data;
					console.log(sampleTable);
					return (
						<>
							{sampleTable.map((item, index) => {
								console.log(item);
								return (
									<>
										{item.employees.map((i, index) => {
											console.log(i);
											return i.name;
										})}
									</>
								);
							})}
						</>
					);
				},
			},
		],
		[]
	);

	
const renderBody=()=>{
    return(
        <div>30 June 2022</div>
    )
}
	return (
		<div>
			<CollectionList fields={["name", "place", "animal", "thing"]} />
			{/* <Calendar /> */}
            <EventCard title="UpcomingEvents" renderBody={renderBody}/>
            <FormProcessor submitEnable={true} submitText="Submit"/>
		</div>
	);
};
