import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import IndexPage from "./components/IndexPage";
import SongPage from "./components/Songs/SongPage";
import Songs from "./components/Songs";
import NotFoundPage from "./components/NotFoundPage";
export default class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path={process.env.PUBLIC_URL + "/"} component={IndexPage} />
				<Route path={process.env.PUBLIC_URL + "/songs/:songid"} component={SongPage} />
				<Route path={process.env.PUBLIC_URL + "/songs"} component={Songs} />
				<Route path={process.env.PUBLIC_URL + "/about"} component={AboutPage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		);
	}
}
