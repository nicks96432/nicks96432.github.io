import React from "react";
import { Button, Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import "./SongFilter.scss";

const TypeButton = (props) => (
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

TypeButton.propTypes = {
	songType: PropTypes.string,
	active: PropTypes.bool,
	onClick: PropTypes.func,
};

const SongFilter = (props) => {
	let newState = {};
	Object.assign(newState, props.filterState);
	return (
		<Row className="song-filter">
			<TypeButton
				songType="Princess"
				onClick={() => {
					newState.princess = !newState.princess;
					props.setFilterState(newState);
				}}
				active={newState.princess}
			/>
			<TypeButton
				songType="Fairy"
				onClick={() => {
					newState.fairy = !newState.fairy;
					props.setFilterState(newState);
				}}
				active={newState.fairy}
			/>
			<TypeButton
				songType="Angel"
				onClick={() => {
					newState.angel = !newState.angel;
					props.setFilterState(newState);
				}}
				active={newState.angel}
			/>
			<TypeButton
				songType="All"
				onClick={() => {
					newState.all = !newState.all;
					props.setFilterState(newState);
				}}
				active={newState.all}
			/>
		</Row>
	);
};

SongFilter.propTypes = {
	filterState: PropTypes.object,
	setFilterState: PropTypes.func,
};

export default SongFilter;
