import React, { Component } from "react";
import SingleLight from "./SingleLight";
import WalkSign from "./WalkSign";
import DropDownForm from "./DropDownForm";
import styles from "../styles/App.module.css";

// green = WALK (green)
// yellow = blinking DON'T WALK
// red = DON'T WALK (red)

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeLight: null,
			mode: "Manual"
		};
	}
	whenClicked() {
		console.log("click");
		fetchLight()
			.then(color =>
				this.setState({
					activeLight: color
				})
			)
			.catch(() =>
				this.setState({
					activeLight: null
				})
			);
	}
	changeModes(mode) {
		this.setState({
			mode
		});
	}
	render() {
		let lights = [];

		for (let i = 0; i < 3; i++) {
			const activeLight = this.state.activeLight;
			if (activeLight === "red" && i === 0) {
				lights.push(<SingleLight key={i} active="red" />);
			} else if (activeLight === "yellow" && i === 1) {
				lights.push(<SingleLight key={i} active="yellow" />);
			} else if (activeLight === "green" && i === 2) {
				lights.push(<SingleLight key={i} active="green" />);
			} else {
				lights.push(<SingleLight key={i} />);
			}
		}

		return (
			<div className={styles.allTrafficSigns}>
				<DropDownForm changeMode={mode => this.changeModes(mode)} />
				<div className={styles.container} onClick={() => this.whenClicked()}>
					{lights}
				</div>
				<WalkSign active={this.state.activeLight} />
			</div>
		);
	}
}

function fetchLight() {
	return new Promise((resolve, reject) => {
		switch (Math.floor(Math.random() * 3)) {
			case 0:
				resolve("red");
			case 1:
				resolve("yellow");
			case 2:
				resolve("green");
		}
	});
}

export default App;
