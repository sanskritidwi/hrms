import React from "react";
import { FormProcessor } from "../../../common/FormFields/FormProcessor";
import  PageHeader from "../../../common/PageHeader";
import CollectionList from "../../../common/table/CollectionList";
import Tabcustom from "../../../common/Tabs";

const PgDetails = () => {
	const customRenderDownload = () => {
		return (
			<div className="d-flex">
				<button className="defaultButtonWhiteSm me-5" disabled>Download</button>
				<button className="defaultButtonWhiteSm" >Upload</button>
			</div>
		);
	};

    const customREnderActions =(status)=>{
        switch (status) {
            case "approved":
                return <div className="approved">Proccessed</div>;
            case "declined":
                return <div className="declined">Declined</div>;
            case "pending":
                return <div className="pending">Pending</div>;
				default: return null;
        }
    }
	/**Schemas */

	const formSchema = {
		submitEnable: "true",
		submitText: "Save",
		schema: [
			{
				nested: true,
				schema: [
					{
						type: "input",
						schema: {
							placeHolder: "John Doe",
							name: "empName",
							id: "name",
							type: "text",
							label: "Name",
						},
					},
					{
						type: "input",
						schema: {
							placeHolder: "john@gmail.com",
							name: "email",
							id: "email",
							type: "email",
							label: "Personal Email",
						},
					},
				],
			},
			{
				nested: true,
				schema: [
					{
						type: "input",
						schema: {
							placeHolder: "XXXX-XXXX-XXXX",
							name: "adharNo",
							id: "adhar",
							type: "number",
							label: "Aadhar Card Number",
							minlength: 12,
							maxlength: 12,
						},
					},
					{
						type: "input",
						schema: {
							placeHolder: "XXXX-XXXX-XXXX",
							name: "panNo",
							id: "pan",
							type: "number",
							label: "Pan Card Number",
						},
					},
				],
			},
			{
				nested: true,
				schema: [
					{
						type: "input",
						schema: {
							placeHolder: "XXXXX-XXXXX",
							name: "contactNo",
							id: "contactNo",
							type: "number",
							label: "Contact Number",
						},
					},
					{
						type: "input",
						schema: {
							placeHolder: "XXXXX-XXXXX",
							name: "emergencyContact",
							id: "emgNo",
							type: "number",
							label: "Emergency Contact Number",
						},
					},
				],
			},
			{
				nested: true,
				schema: [
					{
						type: "input",
						schema: {
							placeHolder: "",
							name: "currentAddress",
							id: "address",
							type: "text",
							label: "Current Address",
						},
					},
					{
						type: "input",
						schema: {
							placeHolder: "",
							name: "permanentAddress",
							id: "addressp",
							type: "text",
							label: "Permanent Address",
						},
					},
				],
			},
			{
				nested: true,
				schema: [
					{
						type: "dropdown",
						schema: {
							header: "Select",
							options: [
								"A +",
								"A -",
								"B +",
								"B -",
								"O +",
								"O -",
								"AB +",
								"AB -",
							],
							label: "Blood Group",
						},
					},
					{
						type: "input",
						schema: {
							placeHolder: "",
							name: "medical",
							id: "medical",
							type: "text",
							label: "Medical Condition (if any)",
						},
					},
				],
			},
		],
	};

	const tabData = [
		{
			id: "pd",
			title: "Personal Details",
			keyevent: "pd",
			body: () => renderPersonalDetails(),
		},
		{
			id: "document",
			title: "Documents",
			keyevent: "document",
			body: () => renderDocuments(),
		},
		{
			id: "pastemp",
			title: "Past Employment Details",
			keyevent: "pstemp",
			body: () => renderPastEmploymentDetails(),
		},
	];

	const tableSchema = {
		tHead: ["Document", "Date of Upload", "File Name", "", "HR Actions"],
		tData: [
			{
				id: "1",
				items: ["Adhar Card *", "1 March 2023", "file.pdf",customRenderDownload(), customREnderActions("approved")],
			},
			{
				id: "2",
				items: ["PAN Card *", "1 March 2023","file.pdf", customRenderDownload(), customREnderActions("declined")],
			},
			{
				id: "3",
				items: ["10th Marksheet *", "1 March 2023","file.pdf", customRenderDownload(), customREnderActions("pending")],
			},
			{
				id: "4",
				items: ["12th Marksheet *", "1 March 2023","file.pdf", customRenderDownload(), customREnderActions("approved")],
			},
			{
				id: "3",
				items: ["UG Marksheet ", "1 March 2023","file.pdf", customRenderDownload(), customREnderActions("declined")],
			},
			{
				id: "3",
				items: ["PG Marksheet ", "1 March 2023","file.pdf", customRenderDownload(), customREnderActions("pending")],
			},
		],
	};

	/**Render Functions */
	const renderPersonalDetails = () => {
		return (
			<>
				<FormProcessor schema={formSchema} />
			</>
		);
	};

	const renderDocuments = () => {
		return (
			<>
				<CollectionList schema={tableSchema} />
			</>
		);
	};

	const renderPastEmploymentDetails = () => {
		return <></>;
	};
	return (
		<div className="PgDetails pageBody">
			<PageHeader pageheading="My Details" />
			<Tabcustom tabData={tabData} />
		</div>
	);
};

export default PgDetails;
