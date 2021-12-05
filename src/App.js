import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} exact></Route>
				<Route exact path="/join-discord" lnk="https://discord.gg/rkb9JSZSxp" />
			</Routes>
		</Router>
	);
}

export default App;
