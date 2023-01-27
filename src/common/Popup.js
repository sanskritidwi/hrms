/* <Popup schema={modalschema} show={show} /> */

import React from "react";

const Popup = ({ schema, show, onClose }) => {
	const renderHeader = (value) => {
		return (
			<>
				<div className="modal-header">
					<h4 className="modal-title">{value}</h4>
					<button onClick={onClose} className="btn-close"></button>
				</div>
			</>
		);
	};

	const renderButton = (btnArr) => {
		return (
			<>
				<div className="modal-btns">
					{btnArr.map((item, index) => {
						return (
							<>
								<button className="main-btn" onClick={onClose}>{item}</button>
							</>
						);
					})}
				</div>
			</>
		);
	};

	const renderItem = (key, value) => {
		switch (key) {
			case "customBody":
				return <div className="modal-content">{value}</div>;
			case "buttons":
				return <>{renderButton(value)}</>;
			case "titleModal":
				return <>{renderHeader(value)}</>;
			default:
				return null;
		}
	};

	if (!show) return null;
	return (
		<>
				<div className="modal-wrapper">
					<div className="modal-content">
						{Object.entries(schema).map(([key, value]) => {
							return renderItem(key, schema[key]);
						})}
					</div>
				</div>
		</>
	);
};

export default Popup;
