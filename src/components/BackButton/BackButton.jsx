import React from "react";
import Button from "react-bootstrap/Button";
export class BackButton extends React.Component {
	render() {
		return <Button onClick={this.props.history.goBack}>{this.props.children}</Button>;
	}
}
