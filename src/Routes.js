import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import MLTD from "./components/MLTD";
import SongPage from "./components/MLTD/SongsPage/SongPage";
import NotFoundPage from "./components/NotFoundPage";
import CreditPage from "./components/CreditPage";
import EventPage from "./containers/EventPage";
import SongsPage from "./containers/SongsPage";

const Routes = () => (
	<Switch>
		<Route exact path="/" component={IndexPage} />
		<Route exact path="/MLTD/songs/:songid" component={SongPage} />
		<Route exact path="/MLTD/events" component={EventPage} />
		<Route exact path="/MLTD/songs" component={SongsPage} />
		<Route exact path="/MLTD" component={MLTD} />
		<Route exact path="/about" component={CreditPage} />
		<Route path="*" component={NotFoundPage} />
	</Switch>
);

export default Routes;
