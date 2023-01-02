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

function App() {
	return (
		<>
			<div className="App">
				HRM Cubexo
				<Router>
					<Layout />
				 <Routes>
						<Route path="/" element={<SansCanvas />} />
						<Route path="/sans" element={<SansCanvas />} />
						<Route path="/kavi" element={<KavitaCanvas />} />
						<Route path="/nisha" element={<NishaCanvas />} />
					</Routes>
				
				</Router>
			</div>
		</>
	);
}
export default App;
