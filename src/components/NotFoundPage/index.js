import React from "react";
import { Button, Container } from "reactstrap";
import PropTypes from "prop-types";
import "./NotFoundPage.scss";

const NotFoundPage = (props) => (
	<Container className="not-found-page">
		<div>404</div>
		<Button onClick={props.history.goBack}>回上一頁</Button>
	</Container>
);

NotFoundPage.propTypes = { history: PropTypes.object };

export default NotFoundPage;
