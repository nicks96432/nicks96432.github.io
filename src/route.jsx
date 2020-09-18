import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import IndexPage from "./components/IndexPage";
import SongPage from "./components/Songs/SongPage";
import Songs from "./components/Songs";
export default class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={IndexPage} />
				<Route path="/songs/:songid" component={SongPage} />
				<Route path="/songs" component={Songs} />
				<Route path="/about" component={AboutPage} />
			</Switch>
		);
	}
}
