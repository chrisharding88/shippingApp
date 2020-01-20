import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className="buttons">
				<Link role="button" className="btn btn-primary" to="/ShippingPage">
					Shipping
				</Link>
				<Link role="button" className="btn btn-primary" to="/BarrelPage">
					Purchase Barrel
				</Link>
			</div>
		</div>
	);
};

export default Home;
