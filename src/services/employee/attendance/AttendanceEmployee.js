import React, { useState } from "react";
import PageHeader from "../../../common/PageHeader";
import Popup from "../../../common/Popup";
import ProgressBar from "../../../common/progressBar";

const data = {
	empName: "Sanskriti",
	dayStatus: "working",
};

const AttendanceEmployee = () => {

	let date = new Date();


	/*States */
	const [showModal, setShowModal] = useState(false);
  const [markTime, setMarkTime] = useState(false);
  const [session, setSession] = useState(date)


	/*Refs */

	/*Other Hooks */

	/*Variables */


	let currentDate = date.getDate();
	let currentMonth = date.getMonth() + 1;
	let currentYear = date.getYear();
	let currentHours = date.getHours();
	let currentMinutes = date.getMinutes();

	/*Render Functions */
	const renderHeader = () => {

	
		const renderSession = () => {
			return <>{`${currentDate} / ${currentMonth} / ${currentYear}`}</>;
		};

		const renderDayStatus = () => {
			console.log(data.dayStatus);
			switch (data.dayStatus) {
				case "working":
					return <div className="statusButtonSm">Working</div>;
				case "holiday":
					return <div className="statusButtonSm">Holiday</div>;
				case "weekend":
					return <div className="statusButtonSm">Weekend</div>;
				default:
					return null;
			}
		};

		return (
			<>
				<div className="d-flex align-items-center">
					{renderSession()}
					{renderDayStatus()}
				</div>
			</>
		);
	};

	const renderTimeRecordingRow = () => {
		const renderTimeButtons = (type) => {
			return (
				<div className="d-flex">
					<div className="time">Time {type} :</div>
					<div
						className="markBtn"
						onClick={(type) => {
							setShowModal(true);
						}}>
						Mark Now
					</div>
					{type === "in" ? (
						<div className="INN">
							<Popup
								schema={modalschemaTimeIn}
								show={showModal}
								onClose={() => {
									setShowModal(false);
								}}
							/>
						</div>
					) : (
						<div className="OUTT">
							<Popup
								schema={modalschemaTimeOut}
								show={showModal}
								onClose={() => {
									setShowModal(false);
								}}
							/>{" "}
						</div>
					)}
				</div>
			);
		};
		return (
			<div className="d-flex">
				{renderTimeButtons("in")}
				{renderTimeButtons("out")}
			</div>
		);
	};
	/* Schemas */

	const renderBodyTimeIn = () => {
		return (
			<div className="text-center">
				Marking Time in at {currentHours} : {currentMinutes}
			</div>
		);
	};

	const renderBodyTimeOut = () => {
		return (
			<div className="text-center align-items-center">
				Marking Time out at {currentHours} : {currentMinutes}
        <button className="defaultButtonPrimary" >Ok, Cool !</button>
			</div>
		);
	};
	const modalschemaTimeIn = {
		titleModal: "",
		customBody: renderBodyTimeIn(),
		buttons: ["Ok, cool !"],
	};
	const modalschemaTimeOut = {
		titleModal: "",
		customBody: renderBodyTimeOut(),
		buttons: ["Ok, cool !"],
	};

	return (
		<>
			<div className="AttendanceEmployee pageBody ">
				<PageHeader pageheading="Attendance" />
				{renderHeader()}
				{renderTimeRecordingRow()}
			</div>
		</>
	);
};

export default AttendanceEmployee;
