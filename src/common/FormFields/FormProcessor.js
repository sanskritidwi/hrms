/**
const formSchema = {
	submitEnable: "true",
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

const dropSchema = {
	header: "kjhkj",
	iconClass: "DFSF",
	options: ["1", "2"],
	label: "selecet",
};

const inputSchema = {
	placeHolder: "input",
	name: "ip",
	id: "planet",
	type: "date",
	label: "Reason",
};


export const FormProcessor = ({schema}) => {
	const [form, setForm] = useState({});

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
		console.log("from submited : ", form);
	};


	const renderItem = (item)=>{
		switch(item.type){
			case "input" : return<Input schema={item.schema}/>
			case "dropdown" : return<DropDown schema={item.schema}/>
			case "uploadfile" : return <FileUpload schema={item.schema}/>

		}
	}

	return (
		<div className="FormProcessorWrapper">
			<form
				onChange={(e) => {
					handleFormChange(e);
				}}
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				{schema.schema.map((item, index)=>{
					return (<>{renderItem(item)}</>)
				})}

				<button type="submit" className="defaultButtonPrimary">
					{schema.submitText}
				</button>
			</form>
		</div>
	);
};
