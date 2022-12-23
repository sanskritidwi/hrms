import React, { useState, useEffect, useMemo } from "react";
import { CollectionList } from "./CollectionList";
import OutsideClickHandler from "./OutsideClickHandler";

export const SansCanvas = () => {
	const data = [
		{
			day: "Jan 1, 22",
			status: "working day",
			employee: [
				{
					employeeId: "1",
					name: "sanskriti",
					status: "Present",
				},
				{
					employeeId: "1",
					name: "sanskriti",
					status: "Present",
				},
			],
		},
	];



    const mapArray=(employee)=>{
        employee.map((item,index)=>{
           return item.employeeId;
        })
    }

	const columns = useMemo(() => [{

        Header: "Employees",
        accessor:"sdfs"
    }], []);

	return (
		<div>
			<CollectionList columns={columns} data={data} />
		</div>
	);
};
