import React, { useState } from "react";
import { DropDown } from "../../../common/FormFields/DropDown";
import OutsideClickHandler from "../../../common/OutsideClickHandler";
import { PageHeader } from "../../../common/PageHeader";
import { SearchBar } from "../../../common/SearchBar";

import data from "./data";
import RenderStatusInfo from "./RenderStatusInfo";

export const MonthWiseAttendance = () => {
	const [monthSelect, setMonthSelect] = useState(false);
	const [showMonthData, setShowMonthData] = useState(data[0].schema[0].month);

	console.log(showMonthData);

	const searchBarSchema = {
		placeHolder:"Search"
	}

	const dropDownSchemaDepartment = {
		header:"Department",
		iconClass:"iconBlackArrowDown",
		options:["IT", "Marketing","HR"]
	}

	const dropDownSchemaEmployees = {
		header:"Employees",
		iconClass:"iconBlackArrowDown",
		options:["Present Today", "Absent Today","On leave"]
	}

	const renderFiltersRow = () => {
		const renderEmployeeCount = () => {
			return <div>50 Employees</div>;
		};
		const renderCalendarSelect = () => {
			const renderMonths = (item, index) => {
				if (!monthSelect) return null;
				return (
					<>
						<OutsideClickHandler
							callbackFunction={() => {
								setMonthSelect(false);
							}}>
							<div className="months defaultButtonWhite">
								{item.schema.map((month, index) => {
									return (
										<>
											<div
												key={index}
												className="month"
												onClick={() => {
													setShowMonthData(month.month);
												}}>
												{month.month}
											</div>
										</>
									);
								})}
							</div>
						</OutsideClickHandler>
					</>
				);
			};
			const renderHead = (item, index) => {
				return (
					<>
						<div className="head defaultButtonWhite">
							<div className="iconBlackArrowLeft"></div>
							<div
								key={index}
								className="year"
								onClick={() => {
									setMonthSelect(!monthSelect);
								}}>
								{item.year}
							</div>
							<div className="iconBlackArrowRight"></div>
						</div>
					</>
				);
			};

			return (
				<div className="calendarSelect">
					{data.map((item, index) => {
						return (
							<>
								{renderHead(item, index)}
								{renderMonths(item, index)}
							</>
						);
					})}
				</div>
			);
		};
		const renderSearchBar = () => {
			return(<><SearchBar schema={searchBarSchema}/></>)
		};
		const renderDepartmentFilter = () => {
			return(<><DropDown schema={dropDownSchemaDepartment}/></>)
		};
		const renderEmployeeFilter = () => {
			return(<><DropDown schema={dropDownSchemaEmployees}/></>)

		};
		const renderViewDetailBtn = () => {};

		return (
			<div className="filtersRow">
				{renderEmployeeCount()}
				{renderCalendarSelect()}
				{renderSearchBar()}
				{renderDepartmentFilter()}
				{renderEmployeeFilter()}
				{renderViewDetailBtn()}
			</div>
		);
	};

	const newMonth = data[0].schema[0];

	const renderTable = (newMonth) => {
		const renderTableHeader = () => {
			return (
				<>
					<th className="employeeHead">Employees</th>
					{newMonth.dateRecord.map((date, index) => {
						return (
							<>
								<th className="">
									{showMonthData}
									{date.date}
								</th>
							</>
						);
					})}
				</>
			);
		};

		const renderTableBody = () => {
			const renderTableRow = (id) => {
				return (
					<>
						{newMonth.dateRecord.map((item, index) => {
							if (item.dayStatus === "weekend") {
								return (
									<>
										<td>WK</td>
									</>
								);
							} else if (item.dayStatus === "holiday") {
								return (
									<>
										<td>HL</td>
									</>
								);
							} else {
								return (
									<>
										{item.employeeRecord.map((item, index) => {
											if (item.id === id) {
												return (
													<>
														<td>
															<RenderStatusInfo timeInfo={item} />
														</td>
													</>
												);
											}
										})}
									</>
								);
							}
						})}
					</>
				);
			};
			console.log(newMonth);
			return (
				<>
					{newMonth.dateRecord[0].employeeRecord.map((item, index) => {
						return (
							<tr>
								<td className="employeeName">{item.name}</td>
								{renderTableRow(item.id)}
							</tr>
						);
					})}
				</>
			);
		};
		return (
			<>
				<table>
					<tr>{renderTableHeader()}</tr>
					<tbody>{renderTableBody()}</tbody>
				</table>
			</>
		);
	};

	return (
		<div className="MonthWiseAttendanceWrapper pageBody">
			<PageHeader pageheading="Attendance" />
			{renderFiltersRow()}
			{renderTable(newMonth)}
		</div>
	);
};
