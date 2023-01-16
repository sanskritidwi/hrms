import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";



const CollectionList= ({schema}) => {
	return (
		<div className="CollectionListWrapper">
			<table>
				<tr className="tableHead">
					{schema.tHead.map((item, index) => {
						return <TableHead item={item} />;
					})}
				</tr>

				<tbody className="tableBody">
					{schema.tData.map((item, index) => {
						return <TableRow rowData={item} />;
					})}
				</tbody>
			</table>
		</div>
	);
};

export default CollectionList;
