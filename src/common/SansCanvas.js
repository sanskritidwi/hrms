import React, { useState, useEffect, useMemo } from "react";
import { Calendar } from "./Calendar";
import { CollectionList } from "./CollectionList";
import { EventCard } from "./EventCard";
import { FormProcessor } from "./FormFields/FormProcessor";
import OutsideClickHandler from "./OutsideClickHandler";

export const SansCanvas = () => {
	const data = [
		{
			day: "Jan 1, 22",
			status: "working day",
			employee: [
				{
					employeeId: "1",
					name: "sanskriti",
					status: "Present",
				},
				{
					employeeId: "1",
					name: "sanskriti",
					status: "Present",
				},
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
