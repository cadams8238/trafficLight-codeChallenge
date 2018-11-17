import React, { Component } from "react";
import SingleLight from "./SingleLight";
import styles from "../styles/App.module.css";

class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<SingleLight />
				<SingleLight />
				<SingleLight />
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
