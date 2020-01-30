import React from 'react';
import './thankYou.css';
import Logo from '../../bescoLogo.jpg';

export const ThankYouInfo = () => {
	return (
		<div className="box5">
			<img src={Logo} alt="Besco Logo" />
			<h1>Your Information Has Been Sent</h1>
			<h2>Thank You For Using Our Service</h2>
		</div>
	);
};
