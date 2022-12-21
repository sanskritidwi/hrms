/* 

Caller

<OutsideClickHandler callbackFunction={()=>{console.log("out")}}>
<div
    style={{ border: "1px solid  black", padding: "25px" }}>
    SansCanvas
</div>
</OutsideClickHandler> */


import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const OutsideClickHandler = ({ children, callbackFunction }) => {
	const parentRef = useRef();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (callbackFunction && !parentRef?.current?.contains(e.target)) {
				callbackFunction();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={parentRef}>
			{children}
		</div>
	);
};

OutsideClickHandler.protoTypes = {
	callbackFunction: PropTypes.func.isRequired,
};

export default OutsideClickHandler;
