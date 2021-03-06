import React from 'react';

export const DropdownCountries = (props) => {
	return (
		<div className="dropdownCountriesMenu" id="country">
			<label for="dropdown-menu"> Country:</label>
			<select>{props.children}</select>
		</div>
	);
};

export const ShipPrice = (props) => {
	return (
		<div>
			<span className="displayShippingBarrelPrice" onChange={(event) => props.onChange(event)}>
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
