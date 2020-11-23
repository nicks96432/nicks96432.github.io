import React from "react";

class Clock extends React.Component {
	constructor() {
		super();
		this.state = { time: new Date().toLocaleTimeString() };
	}
	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		this.setState({ time: new Date().toLocaleTimeString() });
	}
	render() {
		return <>{this.state.time}</>;
	}
}

export default Clock;
