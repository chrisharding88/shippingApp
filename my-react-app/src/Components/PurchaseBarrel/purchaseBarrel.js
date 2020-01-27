import React from 'react';

export const DropdownBarrels = (props) => {
	return (
		<div className="dropdownBarrelMenu" id="barrelChoice">
			<label for="dropdown-menu"> Pick A Barrel:</label>
			<select onChange={(event) => props.onChange(event)}>{props.children}</select>
		</div>
	);
};

export const BarrelPrice = (props) => {
	return (
		<div>
			<span className="displayBarrelPrice" onChange={(event) => props.onChange(event)}>
				{props.children}
			</span>
		</div>
	);
};

export const Submit = (props) => {
	return (
		<button type="button" className="btn btn-primary" onClick={props.onClick}>
			Submit
		</button>
	);
};
