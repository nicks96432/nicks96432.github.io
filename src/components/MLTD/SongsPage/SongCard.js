import React from "react";
import { CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";

const SongCard = (props) => {
	const placeholder = (type) => {
		let src = "";
		if (type === "Princess")
			src =
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8EVr5HwAGmgK3/y/5ngAAAABJRU5ErkJggg==";
		else if (type === "Fairy")
			src =
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0qDn3HwAFOQKTFemyrgAAAABJRU5ErkJggg==";
		else if (type === "Angel")
			src =
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8clzmPwAHZgLY9f48cAAAAABJRU5ErkJggg==";
		else if (type === "All")
			src =
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
		return <img height="100%" width="100%" alt="placeholder" src={src} />;
	};
	return (
		<Link
			className={props.songType + "-card card"}
			to={`/MLTD/songs/${props.songid}`}
		>
			<LazyLoad once offset={100} placeholder={placeholder(props.songType)}>
				<CardImg src={props.coverSrc} alt={props.songName_zh} />
			</LazyLoad>
			<CardBody>
				<img
					src={require("../../../assets/icons/" + props.songType + "_icon.png").default}
					alt={props.songType + " icon"}
					style={{ width: "1.5em" }}
				/>
				<div>{props.songName_zh}</div>
			</CardBody>
		</Link>
	);
};

SongCard.propTypes = {
	songType: PropTypes.string,
	coverSrc: PropTypes.string,
	songName_zh: PropTypes.string,
};

export default SongCard;
