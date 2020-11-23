import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import MLTD from "./components/MLTD";
import SongPage from "./components/MLTD/SongsPage/SongPage";
import NotFoundPage from "./components/NotFoundPage";
import CreditPage from "./components/CreditPage";
import EventPage from "./containers/EventPage";
import SongsPage from "./containers/SongsPage";
class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path={process.env.PUBLIC_URL + "/"} component={IndexPage} />
				<Route
					exact
					path={process.env.PUBLIC_URL + "/MLTD/songs/:songid"}
					component={SongPage}
				/>
				<Route exact path={process.env.PUBLIC_URL + "/MLTD/events"} component={EventPage} />
				<Route exact path={process.env.PUBLIC_URL + "/MLTD/about"} component={CreditPage} />
				<Route exact path={process.env.PUBLIC_URL + "/MLTD/songs"} component={SongsPage} />
				<Route exact path={process.env.PUBLIC_URL + "/MLTD"} component={MLTD} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		);
	}
}

export default Routes;
