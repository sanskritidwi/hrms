import React, { useState } from "react";
import OutsideClickHandler from "../OutsideClickHandler";

export const DropDown = ({ schema }) => {
	const [showOptions, setShowOptions] = useState(false);
	const { header, iconClass, options } = schema;

	const renderOptions = () => {
		if (!showOptions) return null;
		return (
			<>
				<OutsideClickHandler
					callbackFunction={() => {
						setShowOptions(false);
					}}>
					<div className="options">
						{options.map((item, index) => {
							return <div className="option">{item}</div>;
						})}
					</div>
				</OutsideClickHandler>
			</>
		);
	};
	return (
		<div className="DropDownWrapper">
			<div className="dropHeader defaultButtonWhite">
				{header}
				<div
					className={iconClass}
					onClick={() => {
						setShowOptions(!showOptions);
					}}></div>
			</div>
			{renderOptions()}
		</div>
	);
};
