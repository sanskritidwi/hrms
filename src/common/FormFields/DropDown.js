import React, { useState } from "react";

export const DropDown = ({ schema }) => {
	const {label, header, options } = schema;

	const handleChange = (e)=>{
		console.log(e.target.value)
	}

	
	return (
		<div className="DropDownWrapper">
			<label>{label}</label>
			<select className="dropHeader " name="select" onChange={(e)=>{handleChange(e)}} >
				<option selected disabled hidden>-- {header} --</option>
						{options.map((item, index) => {
							return <option className="option" key={index}>{item}</option>;
						})}
			</select>
		</div>
	);
};
