/*
const empRecord = [
    {
      name: "kavita",
      designation : "software engineer",
      team : "frontend team",
      image : Employee1
    },
]
<CardCurrentEmp data ={empRecord} />
*/

import React from "react";
import { Link } from "react-router-dom";

const CardCurrentEmp = ({ data }) => {
	return (
		<>
			<div className="CardCurrentEmpWrapper">
				<Link to={data.name}>
					<div className="empCard">
						<img src={data.image} className="empImage" />
						<div className="cardHeading">{data.name}</div>
						<h4>{data.designation}</h4>
						<p>{data.team}</p>
					</div>
				</Link>
			</div>
		</>
	);
};

export default CardCurrentEmp;