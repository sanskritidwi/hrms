import React from "react";
import { SearchBar } from "../../../common/SearchBar";
import { EventCard } from "../../../common/EventCard";
import Employee1 from "../../../assets/images/em1.png";
import Employee2 from "../../../assets/images/em2.png";
import CardCurrentEmp from "./CardCurrentEmp";
const PgCurrentEmployeeList = () => {
	/*Schemas*/
	const searchSchema = {
		placeholder: "searchh",
	};
	const empRecord = [
		{
			name: "kavita",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "kavita",
			designation: "software engineer",
			team: "frontend team",
			image: Employee2,
		},
		{
			name: "kavita",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "kavita",
			designation: "software engineer",
			team: "frontend team",
			image: Employee2,
		},
		{
			name: "kavita",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "kavita",
			designation: "software engineer",
			team: "frontend team",
			image: Employee2,
		},
		{
			name: "kavita",
			designation: "software engineer",
			team: "frontend team",
			image: Employee1,
		},
		{
			name: "kavita",
			designation: "software engineer",
			team: "frontend team",
			image: Employee2,
		},
	];
	const pendingInfo = [
		"Meaghan Cpmpigotto",
		"Meaghan Cpmpigotto",
		"Meaghan Cpmpigotto",
		"Meaghan Cpmpigotto",
	];

	/*Render Functions */
	const renderBody = () => {
		return (
			<>
				{
					<ul className="pendingInfo">
						{pendingInfo.map((data) => (
							<li>{data}</li>
						))}
					</ul>
				}
			</>
		);
	};

	return (
		<div className="pageBody PageCurrentEmpList">
			<div>
				<SearchBar schema={searchSchema} />
				<div className="LoopWrapperCardCurrentEmp">
					{empRecord.map((data, index) => (
						<CardCurrentEmp data={data} key={index} />
					))}
				</div>
			</div>
			<EventCard title="Pending information" renderBody={renderBody} />
		</div>
	);
};

export default PgCurrentEmployeeList;
