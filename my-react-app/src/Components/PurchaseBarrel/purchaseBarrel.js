import React from 'react';

export const NumberInput2 = () => {
	return (
		<div className="numberInput2">
			<label>How Many Barrels Are You Buying:</label>
			<input type="number" className="barrelInput" size="2" required />
		</div>
	);
};

export const DropdownBarrels = (props) => {
	return (
		<div className="dropdownBarrelMenu" id="barrelChoice">
			<label for="dropdown-menu"> Pick A Barrel:</label>
			<div className="dropdown-menu">
				<a className="barrels" id={props.id}>
					{props.barrelType}
				</a>
			</div>
		</div>
	);
};

export const BarrelPrice = (props) => {
	return <span className="displayBarrelPrice">{props.barrelPrice}</span>;
};

export const Submit = (props) => {
	return (
		<div className="submit">
			<button type="button" className="btn btn-primary" onClick={props.onClick}>
				Submit
			</button>
		</div>
	);
};
