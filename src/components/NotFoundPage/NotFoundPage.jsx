import React from "react";
import { Container } from "react-bootstrap";
import BackButton from "../BackButton";
export class NotFoundPage extends React.Component {
	render() {
		return (
			<Container style={{ height: "500px" }}>
				<div style={{ fontSize: "xx-large" }}>404</div>
				<BackButton>回上一頁</BackButton>
			</Container>
		);
	}
}
