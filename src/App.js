import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Background from "./components/Background";
import Routes from "./Routes";
import "./App.scss";

const App = () => (
		<Router basename={process.env.PUBLIC_URL}>
			<Background />
			<MyNavbar />
			<div id="content">
				<Routes />
			</div>
			<footer className="blockquote-footer">
				<p>我可能很廢@2020/11/23 react版 測試</p>
			</footer>
		</Router>
);

export default App;
