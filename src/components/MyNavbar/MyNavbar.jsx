import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { MyNavLink } from "./MyNavLink";
import "./MyNavbar.css";
export class MyNavbar extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Brand>
					<MyNavLink exact to="/">
						我可能很廢<span> 的個人空間</span>
					</MyNavLink>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Nav className="navbar-links">
					<MyNavLink to="/songs">歌曲</MyNavLink>
					{/* <MyNavLink to="#">測試1</MyNavLink>
					<MyNavLink to="#">
						<NavItem>測試2</NavItem>
					</MyNavLink> */}
					<MyNavLink to="/about">
						<NavItem>關於</NavItem>
					</MyNavLink>
				</Nav>
			</Navbar>
		);
	}
}
