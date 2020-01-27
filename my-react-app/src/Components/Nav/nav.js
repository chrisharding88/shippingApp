import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../bescoLogo.jpg';

const Nav = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light">
				<img src={Logo} alt="Besco Logo" className="logo" />
				<a className="navbar-brand" href="#" id="brandName">
					BESCO SHIPPERS INC.
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" href="#" to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#" to="/">
								Log Out
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#" to="/upcomingjobs">
								Upcoming Jobs
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
