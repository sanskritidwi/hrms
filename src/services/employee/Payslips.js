import React from "react";
import { FormProcessor } from "../../common/FormFields/FormProcessor";
import { PageHeader } from "../../common/PageHeader";
import CollectionList from "../../common/table/CollectionList";



const customRenderDownload = () => {
	return (
		<div className="d-flex">
			<button className="defaultButtonWhiteSm me-5">Download</button>
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

const formSchema = {
	submitEnable: "false",
	formEditable:"false",
	schema: [
		{
			type: "dropdown",
			schema: {
				header: "Year",
				options: ["2023", "2022"],
				// label: "selecet",
			},
		},
	],
}; 

const Payslips = () => {
	return (
		<div className="PaySlipsWrapper pageBody">
			<PageHeader pageheading="Payslips" />
      <div className="di-flex floatRight">
        <FormProcessor schema={formSchema} />
        <button className="defaultButtonWhiteSm ms-5">Download All</button>
      </div>
			<CollectionList schema={tableSchema} />
		</div>
	);
};

export default Payslips;
