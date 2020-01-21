import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
//import ImageBackground from '../../Components/Background/';

const Home = () => {
	return (
		<div className="container">
			<div className="box">
				<div className="box-body">
					<div className="greeting">
						<h1 />Welcome to the Besco Shippers App
						<h2>Please select one as follows</h2>
					</div>
					<div className="buttons">
						<Link role="button" className="btn btn-primary" id="btn-1" to="/ShippingPage">
							Shipping
						</Link>
						<Link role="button" className="btn btn-primary" id="btn-2" to="/BarrelPage">
							Purchase Barrel
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
