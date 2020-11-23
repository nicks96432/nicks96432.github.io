import React from "react";
import { Button, Container } from "reactstrap";
class NotFoundPage extends React.Component {
	render() {
		return (
			<Container style={{ height: "500px" }}>
				<div style={{ fontSize: "xx-large" }}>404</div>
				<Button onClick={this.props.history.goBack} style={{ backgroundColor: "#487cce" }}>
					回上一頁
				</Button>
			</Container>
		);
	}
}

export default NotFoundPage;
