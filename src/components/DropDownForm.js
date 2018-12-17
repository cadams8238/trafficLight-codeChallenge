import React from "react";

const DropDownForm = ({ changeMode }) => {
	return (
		<select onSubmit={e => changeMode(e.target.value)}>
			<option value="Automatic">Automatic</option>
			<option value="Manual">Manual</option>
		</select>
	);
};

export default DropDownForm;
