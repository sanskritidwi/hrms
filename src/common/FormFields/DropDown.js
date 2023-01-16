import React, { useState } from "react";

export const DropDown = ({ schema ,editMode}) => {
	const {label, header, options } = schema;

	const handleChange = (e)=>{
		console.log(e.target.value)
	}

	
	return (
		<div className={editMode ? "DropDownWrapper" : "DropDownWrapperDisabled"}>
			<label>{label}</label>
			<select className="dropHeader " name="select" onChange={(e)=>{handleChange(e)}} defaultValue={'DEFAULT'} disabled={!editMode}>
				<option value={'DEFAULT'} disabled hidden className="default">-- {header} --</option>
						{options.map((item, index) => {
							return <option className="option" key={index}>{item}</option>;
						})}
			</select>
		</div>
	);
};
