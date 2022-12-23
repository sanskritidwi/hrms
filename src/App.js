
import "./App.css";
import "./styles/css/all.css";
import { SansCanvas } from "./common/SansCanvas";
import axios from "axios";
import {SideMenu} from "./common/SideMenu";
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


function App() {
	
	return (
		<>
			<div className="App">
				{/* <Router>
					<Layout />
					<Routes>
						<Route path="/" element={<SansCanvas />} />
						<Route path="/contact" element={<SansCanvas/>}/>
        <Route path="/blogs" element={<SansCanvas/>}/>
					</Routes>
				</Router> */}
			<SansCanvas/>
			<SideMenu/>
		
			</div>
		</>
	);
			}
export default App;
