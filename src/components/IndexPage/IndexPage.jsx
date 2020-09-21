import React from "react";
import Clock from "./Clock";
export class IndexPage extends React.Component {
	render() {
		return (
			<>
				<div>
					現在時間：
					<Clock />
				</div>
			</>
		);
	}
}
