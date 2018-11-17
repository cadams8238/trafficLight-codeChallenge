import React from "react";
import styles from "../styles/SingleLight.module.css";

const SingleLight = ({ active }) => {
	return <div className={`${styles.singleLight} ${styles[active]}`} />;
};

export default SingleLight;
