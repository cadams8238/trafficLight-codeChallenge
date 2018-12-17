import React from "react";
import styles from "../styles/WalkSign.module.css";

const WalkSign = ({ active }) => {
	// if active === "green"
	// className={styles.green}
	// if active === "yellow"
	// className={styles.yellow}
	// if active === "red"
	// className={styles.red}

	return (
		<div className={styles.walkSign}>
			<p className={active === "green" ? styles.green : ""}>WALK</p>
			<p
				className={`${active === "red" ? styles.red : ""} ${
					active === "yellow" ? styles.yellow : ""
				}`}
			>
				DON'T WALK
			</p>
		</div>
	);
};

export default WalkSign;
