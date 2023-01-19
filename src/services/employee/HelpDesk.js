import React, { useRef } from "react";
import  PageHeader from "../../common/PageHeader";

const HelpDesk = () => {

	const renderTextBox = () => {
		return (
			<div className="textBox">
				<input type="textarea" />
				<div className="optionsRow">
					<div>
						
					</div>
					<div className="defaultButtonPrimary">Post</div>
				</div>
			</div>
		);
	};
	return (
		<div className="HelpDeskWrapper pageBody">
			<PageHeader pageheading="Help Desk" />
			{renderTextBox()}
		</div>
	);
};

export default HelpDesk;
