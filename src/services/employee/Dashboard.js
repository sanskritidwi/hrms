import React, { useState } from "react";
import ListCard from "../../common/ListCard";
import PageHeader from "../../common/PageHeader";

import emp from "../../assets/images/em1.png";

const whosAwaydata = {
	heading: "Who's Away",
	items: [
		{
			subheading: "Today",
			empList: [
				{
					name: "Sanskriti",
					img: emp,
				},
                {
					name: "Sanskriti",
					img: emp,
				},{
					name: "Sanskriti",
					img: emp,
				},{
					name: "Sanskriti",
					img: emp,
				},{
					name: "Sanskriti",
					img: emp,
				},
			],
		},
		{
			subheading: "Tommorrow",
			empList: [
				{
					name: "Sanskriti",
					img: emp,
				},
                {
					name: "Sanskriti",
					img: emp,
				},
			],
		},
	],
};

const birthdayData = {
	heading: "Birthday Folks",
	items: [
		{
			subheading: "Today",
			empList: [
				{
					name: "Sanskriti",
					img: emp,
				},
                {
					name: "Sanskriti",
					img: emp,
				},{
					name: "Sanskriti",
					img: emp,
				},{
					name: "Sanskriti",
					img: emp,
				},
			],
		},
		{
			subheading: "Tommorrow",
			empList: [
				{
					name: "Sanskriti",
					img: emp,
				},
                {
					name: "Sanskriti",
					img: emp,
				},{
					name: "Sanskriti",
					img: emp,
				},{
					name: "Sanskriti",
					img: emp,
				},
			],
		},
	],
};

const data = {
	empName: "Sanskriti",
	dayStatus: "working",
};

const Dashboard = () => {
	let date = new Date();

	let currentDate = date.getDate();
	let currentMonth = date.getMonth() + 1;
	let currentYear = date.getYear();
	let currentHours = date.getHours();

	const [happyIndex, setHappyIndex] = useState();

	const renderGreeting = () => {
		if (currentHours < 12) {
			return <div className="greeting">Good Morning {data.empName} !</div>;
		} else if (currentHours > 12 && currentHours < 16) {
			return <div className="greeting">Good Afternoon {data.empName} !</div>;
		} else if (currentHours > 16 && currentHours < 24) {
			return <div className="greeting">Good Evening {data.empName} !</div>;
		}
	};

	const renderHappinessIndex = () => {
		const emojiArr = [
			{
				code: "&#128534",
				name: "Frustrated",
			},
			{
				code: "&#128532;",
				name: "Sad",
			},
			{
				code: "&#128528;",
				name: "Neutral",
			},
			{
				code: "&#128512;",
				name: "Happy",
			},
			{
				code: "&#128513;",
				name: "Very Happy",
			},
		];

		const renderEmoji = () => {
			return (
				<>
					{emojiArr.map((item, index) => {
						return (
							<div className={`emojiDiv`} onClick={() => {}} key={index}>
								<div className=" emoji"> &#128532;</div>
								{item.name}
							</div>
						);
					})}
				</>
			);
		};

		return (
			<div className="happinessIndex">
				<div>What's your mood today</div>
				<div className="d-flex ">{renderEmoji()} </div>
			</div>
		);
	};


	return (
		<div className="DashboardWrapper pageBody">
						<PageHeader pageheading="Dashboard" />

			<div className="dashBody">
			{renderGreeting()}
			{renderHappinessIndex()}
			<ListCard data={whosAwaydata}/>
			<ListCard data={birthdayData}/>
			</div>
		</div>
	);
};

export default Dashboard;
