import React from "react";
import "./Background.scss";

export class Background extends React.Component {
	constructor() {
		super();
		this.state = { loaded: false };
	}
	componentDidMount() {
		const bgImage = new Image();
		bgImage.src =
			"https://www.dropbox.com/s/qqmg0fuhkywpv85/Starry%20Melody!%20主視覺圖.webp?dl=1";
		bgImage.onload = () => {
			this.setState({ loaded: true });
		};
	}
	render() {
		if (this.state.loaded) return <div id="background"></div>;
		else return <></>;
	}
}

export default Background;
