import React from "react";
import { Col, Row } from "reactstrap";

function EventPage() {
	return (
		<Row>
			<Col></Col>
			<Col xs={10}>
				<div id="event-cards">{this.state.renderEvents}</div>
			</Col>
			<Col></Col>
		</Row>
	);
}

export default EventPage;
