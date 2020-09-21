import React from "react";
import { Link } from "react-router-dom";
import "./SongCard.css";
export class SongCard extends React.Component {
	render() {
		const typeIconStyle = { width: "1.5em" };
		return (
			<Link
				className={"card " + this.props.songType}
				ref={this.typeRef}
				to={process.env.PUBLIC_URL + `/songs/${this.props.songid}`}
			>
				<img
					className="card-img-top"
					src={require("../../../" + this.props.coverSrc)}
					alt={this.props.songName_zh}
				/>
				<div className="card-body">
					<img
						src={require("../../../assets/icons/" + this.props.songType + "_icon.png")}
						alt={this.props.songType + " icon"}
						style={typeIconStyle}
					/>
					<div>{this.props.songName_zh}</div>
				</div>
			</Link>
		);
	}
}
