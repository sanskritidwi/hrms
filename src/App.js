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
import { KavitaCanvas } from "./common/KavitaCanvas";
import { NishaCanvas } from "./common/NishaCanvas";
import { Leave } from "./services/employee/leave/Leave";

function App() {
	return (
		<>
			<div className="App">
				HRM Cubexo
				<Router>
					<Layout />
					<Routes>
						<Route path="/" element={<SansCanvas />} />
						<Route path="employee">
							<Route path="attendance" element={<SansCanvas />} />
							<Route path="leave" element={<Leave />} />
						</Route>
						<Route path="admin">
							<Route path="attendance" element={<SansCanvas />} />
							<Route path="leave" element={<Leave />} />
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
