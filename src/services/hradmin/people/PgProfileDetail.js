import React from "react";
import CardEmpHeader from "./CardEmpHeader";
import Tabcustom from "../../../common/Tabs";
import { FormProcessor } from "../../../common/FormFields/FormProcessor";

const PgProfileDetail = () => {
	/* Schemas */

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
							options: ["A +", "A -", "B +", "B -", "O +", "O -", "AB +", "AB -"],
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

	/* Render Functions */

	const renderPersonalDetails = () => {
		return (
			<>
				<FormProcessor schema={formSchema} />
			</>
		);
	};

	const renderDocuments = () => {
		return <>dfasdfsdfg</>;
	};

	const renderPastEmploymentDetails = () => {
		return <></>;
	};

	return (
		<div className="PgProfileDetailWrapper pageBody">
			<CardEmpHeader />
			<Tabcustom tabData={tabData} />
		</div>
	);
};

export default PgProfileDetail;