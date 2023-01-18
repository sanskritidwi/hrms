import React from "react";
import { PageHeader } from "../../common/PageHeader";
import CollectionList from "../../common/table/CollectionList";

const OrgCalendar = () => {
	const tableSchema = {
		tHead: ["Event", "Day", "Date"],
		tData: [
			{
				id: "1",
				items: ["Event", "Monday", "18/1/23"],
			},
			{
				id: "2",
				items: ["Event", "Monday", "18/1/23"],
			},
			{
				id: "3",
				items: ["Event", "Monday", "18/1/23"],
			},
			{
				id: "2",
				items: ["Event", "Monday", "18/1/23"],
			},
			{
				id: "3",
				items: ["Event", "Monday", "18/1/23"],
			},
		],
	};
	return (
		<div className="OrgCalendarWrapper pageBody">
			<PageHeader pageheading="Organisation Calendar" />
			<CollectionList schema={tableSchema} />
		</div>
	);
};

export default OrgCalendar;