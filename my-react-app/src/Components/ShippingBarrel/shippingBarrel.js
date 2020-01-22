import React from 'react';

export const NumberInput = () => {
	return (
		<div className="numberInput">
			<label>How Many Barrels Are You Sending:</label>
			<input type="number" className="barrelQuantity" size="2" required />
		</div>
	);
};

export const DropdownCountries = (props) => {
	return (
		<div className="dropdownCountriesMenu" id="country">
			<label for="dropdown-menu"> Country:</label>
			<div className="dropdown-menu">
				<a className="country" id={props.id}>
					{props.country}
				</a>
			</div>
		</div>
	);
};

export const ShipPrice = (props) => {
	return <span className="displayShippingBarrelPrice">{props.shippingPrice}</span>;
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
