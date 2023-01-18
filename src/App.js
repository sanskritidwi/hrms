import React from "react";
import "./App.css";
import "./styles/css/all.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Leave from "./services/employee/leave/Leave";
import { MonthWiseAttendance } from "./services/hradmin/attendance/MonthWiseAttendance";
import AttendanceEmployee from "./services/employee/attendance/AttendanceEmployee";
import PgCurrentEmployeeList from "./services/hradmin/people/PgCurrentEmpList";
import Payslips from "./services/employee/Payslips";
import Reimbursements from "./services/employee/Reimbursements";
import Rewards from "./services/employee/Rewards";
import SansCanvas from "./common/canvas/SansCanvas";
import KavitaCanvas from "./common/canvas/KavitaCanvas";
import NishaCanvas from "./common/canvas/NishaCanvas";
import EmpLayout from "./common/layouts/EmpLayout";
import HrLayout from "./common/layouts/HrLayout";
import EmployeeDetailPage from "./services/hradmin/people/CardEmpHeader";
import  PgProfileDetail  from "./services/hradmin/people/PgProfileDetail";
import PgDetails from "./services/employee/details/PgDetails";
import HelpDesk from "./services/employee/HelpDesk";
import OrgCalendar from "./services/employee/OrgCalendar";
import Policies from "./services/employee/Policies";
import PgTeamTree from "./services/employee/teamtree/PgTeamTree";
import HrLeave from "./services/hradmin/HrLeave";

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
								<Route path="teamtree" element={<PgTeamTree />} />
								<Route path="details" element={<PgDetails/>} />
								<Route path="reimbursements" element={<Reimbursements />} />
								<Route path="rewards" element={<Rewards />} />
								<Route path="helpdesk" element={<HelpDesk />} />
								<Route path="orgcalendar" element={<OrgCalendar />} />
								<Route path="policies" element={<Policies/>} />


							</Route>
						</Route>
						<Route path="/" element={<HrLayout />}>
							<Route path="admin">
								<Route path="people">
									<Route path="current" element={<PgCurrentEmployeeList />} />
									<Route path="current/:id" element={<PgProfileDetail />} />
									<Route path="new" element={<PgCurrentEmployeeList />} />
									<Route path="teamtree" element={<PgCurrentEmployeeList />} />
									<Route path="archieved" element={<PgCurrentEmployeeList />} />
								</Route>
								<Route path="attendance">
									<Route path="attendance" element={<MonthWiseAttendance />} />
									<Route path="leaves" element={<HrLeave/>} />
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
