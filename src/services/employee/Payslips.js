import React from "react";
import { PageHeader } from "../../common/PageHeader";
import CollectionList from "../../common/table/CollectionList";



const customRenderDownload = () => {
	return (
		<div className="d-flex">
			<button className="defaultButtonWhiteSm">Download</button>
			<button className="defaultButtonWhiteSm">Raise Issue</button>
		</div>
	);
};

const tableSchema = {
	tHead: ["Month", "Duration", "Actions"],
	tData: [
		{
			id: "1",
			items: [
				"January ",
				"1 January 2023 - 31 January 2023",
				customRenderDownload(),
			],
		},
		{
			id: "2",
			items: [
        "February ",
				"1 February 2023 - 28 January 2023",
				customRenderDownload(),
			],
		},
		{
			id: "3",
			items: [
        "March ",
				"1 March 2023 - 31 March 2023",
				customRenderDownload(),
			],
		},
		{
			id: "4",
			items: [
        "April",
				"1 April 2023 - 30 April 2023",
				customRenderDownload(),
			],
		},
		{
			id: "3",
			items: [
				"May ",
				"1 May 2023 - 31 May 2023",
				customRenderDownload(),
			],
		},
	],
};

const Payslips = () => {
	return (
		<div className="PaySlipsWrapper pageBody">
			<PageHeader pageheading="Payslips" />
			<CollectionList schema={tableSchema} />
		</div>
	);
};

export default Payslips;
