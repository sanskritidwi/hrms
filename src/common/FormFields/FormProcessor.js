import React, { useState, useRef } from "react";
import { DropDown } from "./DropDown";
import { Input } from "./Input";

const dropSchema = {
	header : "kjhkj",
	iconClass: "DFSF",
	options:["1","2"]
}

export const FormProcessor = () => {
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



	return (
		<div>
			<form
				onChange={(e) => {
					handleFormChange(e);
				}}
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				{/* <Input name="username" />
				<Input name="email" />
				<Input name="pw" /> */}
				<DropDown schema={dropSchema}/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
