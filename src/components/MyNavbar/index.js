import React, { useState } from "react";
import { DropdownMenu, Nav, Navbar, DropdownToggle, DropdownItem, Dropdown } from "reactstrap";
import "./MyNavbar.scss";
import { Link } from "react-router-dom";
function MyNavbar() {
	const [dropdownOpen_MLTD, setDropdownOpen_MLTD] = useState(false);
	return (
		<Navbar>
			<div>
				<Link className="navbar-title" to={process.env.PUBLIC_URL + "/"}>
					我可能很廢<span> 的個人空間</span>
				</Link>
			</div>
			<Nav className="navbar-links">
				<Dropdown
					toggle={() => {}}
					isOpen={dropdownOpen_MLTD}
					onMouseEnter={() => {
						setDropdownOpen_MLTD(true);
					}}
					onMouseLeave={() => {
						setDropdownOpen_MLTD(false);
					}}
					className="dropdown-MLTD"
				>
					<DropdownToggle tag={Link} to={process.env.PUBLIC_URL + "/MLTD"} nav caret>
						MLTD
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem tag={Link} to={process.env.PUBLIC_URL + "/MLTD/songs"}>
							歌曲
						</DropdownItem>
						<DropdownItem tag={Link} to={process.env.PUBLIC_URL + "/MLTD/events"}>
							活動
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Link to={process.env.PUBLIC_URL + "/MLTD/about"}>關於</Link>
			</Nav>
		</Navbar>
	);
}

export default MyNavbar;
