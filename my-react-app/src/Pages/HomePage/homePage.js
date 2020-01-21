import React, { Component } from 'react';
import Home from '../../Components/Home/home';
import Nav from '../../Components/Nav/nav';

class HomePage extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Home />
			</div>
		);
	}
}

export default HomePage;
