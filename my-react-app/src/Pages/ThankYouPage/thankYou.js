import React, { Component } from 'react';
import Nav from '../../Components/Nav/nav';
import { ThankYouInfo } from '../../Components/ThankYouInfo/thankInfo';

class ThankYou extends Component {
	render() {
		return (
			<div>
				<Nav />
				<ThankYouInfo />
			</div>
		);
	}
}
export default ThankYou;
