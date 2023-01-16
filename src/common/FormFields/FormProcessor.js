/**
const formSchema = {
	submitEnable: "true",
	formEditable:"true",
	schema: [
		{
			type: "input",
			schema: {
				placeHolder: "input",
				name: "ip",
				id: "planet",
				type: "date",
				label: "Reason",
			},
		},
		{
			type: "dropdown",
			schema: {
				header: "kjhkj",
				options: ["1", "2"],
				label: "selecet",
			},
		},
	],
}; */

import React, { useState, useRef } from "react";
import { DropDown } from "./DropDown";
import FileUpload from "./FileUpload";
import { Input } from "./Input";

export const FormProcessor = ({ schema }) => {
	/*Hooks */
	const [form, setForm] = useState({});
	const [editMode, setEditMode] = useState(false);

	/*Handler Functions */
	const handleFormChange = (event) => {
		const { name, value } = event.target;
		const updatedForm = {
			...form,
			[name]: value,
		};
		setForm(updatedForm);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted : ", form);
		setEditMode(false);
	};

	/*Render Functions */
	const renderItem = (item, editMode) => {
		console.log(item.schema.placeHolder);
		switch (item.type) {
			case "input":
				return <Input schema={item.schema} editMode={editMode} />;
			case "dropdown":
				return <DropDown schema={item.schema} editMode={editMode} />;
			case "uploadfile":
				return <FileUpload schema={item.schema} editMode={editMode} />;
		}
	};

	const renderEdit = () => {
		if(schema.formEditable) {
			setEditMode(true);
			return null;}
		return (
			<button
				className="defaultButtonPrimary"
				onClick={() => {
					setEditMode(true);
				}}>
				Edit
			</button>
		);
	};

	return (
		<div className="FormProcessorWrapper">
			<form
				onChange={(e) => {
					handleFormChange(e);
				}}
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				{!editMode && renderEdit()}
				{editMode && (
					<button type="submit" className="defaultButtonPrimary">
						{schema.submitText}
					</button>
				)}
				{schema.schema.map((item, index) => {
					return (
						<div key={index}>
							{item.nested ? (
								<div className="nestedFlex">
									{item.schema.map((item, index) => {
										return <>{renderItem(item, editMode)}</>;
									})}
								</div>
							) : (
								renderItem(item, editMode)
							)}
						</div>
					);
				})}
			</form>
		</div>
	);
};
