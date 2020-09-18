import React from "react";
import { NavLink } from "react-router-dom";
export class MyNavLink extends React.Component {
	render() {
		return (
			<NavLink exact={this.props.exact} className="navlink" to={this.props.to}>
				{this.props.children}
			</NavLink>
		);
	}
}
