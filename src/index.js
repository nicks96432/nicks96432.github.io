import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import "./index.css";
import Routes from "./route";
import * as serviceWorker from "./serviceWorker";

// get current date
// function getCurrentDate(separator = "") {
// 	let newDate = new Date();
// 	let date = newDate.getDate();
// 	let month = newDate.getMonth() + 1;
// 	let year = newDate.getFullYear();
// 	return `${year}${separator}${month}${separator}${date}`;
// }

ReactDOM.render(
	<Container>
		<noscript>You need to enable JavaScript to run this app.</noscript>
		<Router basename={process.env.PUBLIC_URL}>
			<MyNavbar />
			<div id="content">
				<Routes />
			</div>
			<footer className="blockquote-footer">
				<p>我可能很廢@2020/9/21 react版 測試</p>
			</footer>
		</Router>
	</Container>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
