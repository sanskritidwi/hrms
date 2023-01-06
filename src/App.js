import React from 'react';
import ReactDOM from 'react-dom'
import "./App.css";
import "./styles/css/all.css";
import { SansCanvas } from "./common/SansCanvas";
import axios from "axios";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
	Link,
	Outlet,
	useLocation,
} from "react-router-dom";
import Layout from "./common/Layout";
import  KavitaCanvas  from "./common/KavitaCanvas";
import  NishaCanvas  from "./common/NishaCanvas";
import  Leave  from "./services/employee/leave/Leave";
import { MonthWiseAttendance } from './services/hradmin/attendance/MonthWiseAttendance';
import AttendanceEmployee from './services/employee/attendance/AttendanceEmployee';
import CurrentEmployee from './services/hradmin/detail/CurrentEmployee';
import Payslips from './services/employee/Payslips';
import TeamTree from './services/employee/TeamTree';
import Reimbursements from './services/employee/Reimbursements';
import Rewards from './services/employee/Rewards';

function App() {
	return (
		<>
			<div className="App">
				<Router>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route path="/" element={<SansCanvas />} />
							<Route path="employee">
								<Route path="attendance" element={< AttendanceEmployee/>} />
								<Route path="leave" element={<Leave />} />
								<Route path="payslips" element={<Payslips />} />
								<Route path="teamtree" element={<TeamTree />} />
								<Route path="reimbursements" element={<Reimbursements />} />
								<Route path="rewards" element={<Rewards />} />
							</Route>
							<Route path="admin">
								<Route path="attendance" element={< MonthWiseAttendance/>} />
								<Route path="leave" element={<Leave />} />
								<Route path="people">
								<Route path="current" element={<CurrentEmployee />} />
								<Route path="current/:id" element={<CurrentEmployee />} />
								</Route>
							</Route>
							<Route path="canvas">
								<Route path="sans" element={<SansCanvas />} />
								<Route path="kavi" element={<KavitaCanvas />} />
								<Route path="nisha" element={<NishaCanvas />} />
							</Route>
						</Route>
					</Routes>
				</Router>
			</div>
		</>
	);
}
export default App;
