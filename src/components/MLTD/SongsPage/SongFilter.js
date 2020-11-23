import React from "react";
import { Button, Col, Row } from "reactstrap";
import "./SongFilter.scss";
function TypeButton(props) {
	return (
		<Col xs={6} md={3}>
			<img
				src={require("../../../assets/icons/" + props.songType + "_icon.png").default}
				alt={props.songType + " icon"}
			/>
			<Button
				color="#000000"
				className={
					(props.active ? props.songType + "-button-active" : "transparent") + " btn-lg"
				}
				id={"button-" + props.songType}
				onClick={props.onClick}
			>
				{props.songType}
			</Button>
		</Col>
	);
}
function SongFilter({ filterState, setFilterState }) {
	let newState = {};
	Object.assign(newState, filterState);
	return (
		<Row className="song-filter">
			<TypeButton
				songType="Princess"
				onClick={() => {
					newState.princess = !newState.princess;
					setFilterState(newState);
				}}
				active={newState.princess}
			/>
			<TypeButton
				songType="Fairy"
				onClick={() => {
					newState.fairy = !newState.fairy;
					setFilterState(newState);
				}}
				active={newState.fairy}
			/>
			<TypeButton
				songType="Angel"
				onClick={() => {
					newState.angel = !newState.angel;
					setFilterState(newState);
				}}
				active={newState.angel}
			/>
			<TypeButton
				songType="All"
				onClick={() => {
					newState.all = !newState.all;
					setFilterState(newState);
				}}
				active={newState.all}
			/>
		</Row>
	);
}

export default SongFilter;
