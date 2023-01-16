import React, { useState } from "react";
import { FormProcessor } from "../../common/FormFields/FormProcessor";
import { PageHeader } from "../../common/PageHeader";
import CollectionList from "../../common/table/CollectionList";

const formSchema = {
	submitEnable: "true",
	submitText: "Apply",
	formEditable: "false",
	schema: [
		{
			type: "uploadfile",
			schema: {
				label: "Upload File",
			},
		},
		{
			type: "input",
			schema: {
				placeHolder: "XXXX - XXXX",
				name: "billNo",
				id: "planet",
				type: "text",
				label: "Bill No",
			},
		},
		{
			type: "input",
			schema: {
				placeHolder: "For Office Slippers",
				name: "for",
				id: "planet",
				type: "text",
				label: "For",
			},
		},
	],
};
const customRender = (status) => {
	switch (status) {
		case "approved":
			return <div className="approved">Proccessed</div>;
		case "declined":
			return <div className="declined">Declined</div>;
		case "inprocess":
			return <div className="pending">In Process</div>;
	}
};

const customRenderDownload=()=>{
	return <button className="defaultButtonWhiteSm">Download</button>
}

const tableSchema = {
	tHead: [
		"Date",
		"For",
		"",
		"Status",
	],
	tData: [
		{
			id: "1",
			items: [
				"16/1/23 ",
				"Office Slippers",
				customRenderDownload(),
				customRender("approved"),
			],
		},
		{
			id: "2",
			items: [
				"16/1/23 ",
				"Office Slippers",
				customRenderDownload(),
				customRender("declined"),
			],
		},
		{
			id: "3",
			items: [
				"16/1/23 ",
				"Office Slippers",
				customRenderDownload(),
				customRender("inprocess"),
			],
		},
		{
			id: "2",
			items: [
				"16/1/23 ",
				"Office Slippers",
				customRenderDownload(),
				customRender("declined"),
			],
		},
		{
			id: "3",
			items: [
				"16/1/23 ",
				"Office Slippers",
				customRenderDownload(),
				customRender("approved"),
			],
		},
	],
};
const Reimbursements = () => {
	const [newReimbursement, setnewReimbursement] = useState(false);

	const renderLeaveRecord = () => {
		if (newReimbursement) return null;
		return (
			<>
				<PageHeader pageheading="Reimbursements" />
				<div className="floatRight">
					<button
						className="defaultButtonPrimary"
						onClick={() => {
							setnewReimbursement(true);
						}}>
						Apply for reimbursement
					</button>
				</div>
				<CollectionList schema={tableSchema} />
			</>
		);
	};

	const renderApplyNew = () => {
		if (!newReimbursement) return null;
		return (
			<>
				<div className="d-flex align-items-center my-3">
					<div
						className="iconBlackBack my-3"
						onClick={() => {
							setnewReimbursement(false);
						}}></div>
					<PageHeader pageheading="Claim Reimbursement" />
				</div>

				<FormProcessor schema={formSchema} />
			</>
		);
	};

	return (
		<div className="LeaveWrapper pageBody">
			{renderLeaveRecord()}
			{renderApplyNew()}
		</div>
	);
};

export default Reimbursements;
