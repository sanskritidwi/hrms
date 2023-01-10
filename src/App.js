import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./styles/css/all.css";
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
import Layout from "./common/layouts/EmpLayout";
import Leave from "./services/employee/leave/Leave";
import { MonthWiseAttendance } from "./services/hradmin/attendance/MonthWiseAttendance";
import AttendanceEmployee from "./services/employee/attendance/AttendanceEmployee";
import CurrentEmployee from "./services/hradmin/detail/CurrentEmployee";
import Payslips from "./services/employee/Payslips";
import TeamTree from "./services/employee/TeamTree";
import Reimbursements from "./services/employee/Reimbursements";
import Rewards from "./services/employee/Rewards";
import SansCanvas from "./common/canvas/SansCanvas";
import KavitaCanvas from "./common/canvas/KavitaCanvas";
import NishaCanvas from "./common/canvas/NishaCanvas";
import EmpLayout from "./common/layouts/EmpLayout";
import HrLayout from "./common/layouts/HrLayout";

function App() {
	return (
		<>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" element={<EmpLayout />}>
							<Route path="/" element={<SansCanvas />} />
							<Route path="employee">
								<Route path="attendance" element={<AttendanceEmployee />} />
								<Route path="leave" element={<Leave />} />
								<Route path="payslips" element={<Payslips />} />
								<Route path="teamtree" element={<TeamTree />} />
								<Route path="reimbursements" element={<Reimbursements />} />
								<Route path="rewards" element={<Rewards />} />
							</Route>
						</Route>
						<Route path="/" element={<HrLayout />}>
							<Route path="admin">
								<Route path="people">
									<Route path="current" element={<CurrentEmployee />} />
									<Route path="current/:id" element={<CurrentEmployee />} />
									<Route path="new" element={<CurrentEmployee />} />
									<Route path="teamtree" element={<CurrentEmployee />} />
									<Route path="archieved" element={<CurrentEmployee />} />
								</Route>
								<Route path="attendance">
									<Route path="attendance" element={<MonthWiseAttendance />} />
									<Route path="leaves" element={<Leave />} />
									<Route path="wfh" element={<Leave />} />
								</Route>
								<Route path="financials">
									<Route path="payrolls" element={<MonthWiseAttendance />} />
									<Route path="expenses" element={<Leave />} />
									<Route path="reimbursements" element={<Leave />} />
								</Route>
								<Route path="helpdesk" element={<Leave />} />
								<Route path="calendar" element={<Leave />} />

							</Route>
						</Route>
						<Route path="canvas">
							<Route path="sans" element={<SansCanvas />} />
							<Route path="kavi" element={<KavitaCanvas />} />
							<Route path="nisha" element={<NishaCanvas />} />
						</Route>
					</Routes>
				</Router>
			</div>
		</>
	);
}
export default App;
