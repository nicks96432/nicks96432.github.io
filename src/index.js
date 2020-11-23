import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// get current date
// function getCurrentDate(separator = "") {
// 	let newDate = new Date();
// 	let date = newDate.getDate();
// 	let month = newDate.getMonth() + 1;
// 	let year = newDate.getFullYear();
// 	return `${year}${separator}${month}${separator}${date}`;
// }

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
