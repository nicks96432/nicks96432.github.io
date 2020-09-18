import React from "react";
import "./Filterbar.css";
class TypeButton extends React.Component {
	constructor() {
		super();
		this.state = { active: false };
	}
	render() {
		let active = this.props.active ? this.props.songType + "-button-active" : "transparent";
		return (
			<div>
				<img
					src={require("../../../assets/icons/" + this.props.songType + "_icon.png")}
					alt={this.props.songType + " icon"}
				/>
				<button
					className={active + " btn btn-lg"}
					id={"button-" + this.props.songType}
					onClick={this.props.onClick}
				>
					{this.props.songType}
				</button>
			</div>
		);
	}
}
export class Filterbar extends React.Component {
	constructor() {
		super();
		this.state = {
			togglePrincess: false,
			toggleFairy: false,
			toggleAngel: false,
			toggleAll: false,
		};
		this.stateRef = React.createRef();
		this.changePrincessState = this.changePrincessState.bind(this);
		this.changeFairyState = this.changeFairyState.bind(this);
		this.changeAngelState = this.changeAngelState.bind(this);
		this.changeAllState = this.changeAllState.bind(this);
	}
	changePrincessState = () => this.setState({ togglePrincess: !this.state.togglePrincess });
	changeFairyState = () => this.setState({ toggleFairy: !this.state.toggleFairy });
	changeAngelState = () => this.setState({ toggleAngel: !this.state.toggleAngel });
	changeAllState = () => this.setState({ toggleAll: !this.state.toggleAll });
	componentDidUpdate(prevProps, prevState) {
		if (this.state !== prevState) this.props.filter();
	}
	render() {
		return (
			<div id="type-buttons" className="row">
				<TypeButton
					songType="Princess"
					onClick={this.changePrincessState}
					active={this.state.togglePrincess}
				/>
				<TypeButton
					songType="Fairy"
					onClick={this.changeFairyState}
					active={this.state.toggleFairy}
				/>
				<TypeButton
					songType="Angel"
					onClick={this.changeAngelState}
					active={this.state.toggleAngel}
				/>
				<TypeButton
					songType="All"
					onClick={this.changeAllState}
					active={this.state.toggleAll}
				/>
			</div>
		);
	}
}
