import React from 'react';
import './date.css';

const Date = () => {
	return (
		<div className="Date">
			<label>Select The Date:</label>
			<input className="form-control" type="Date" id="date-select" />
		</div>
	);
};

export default Date;
