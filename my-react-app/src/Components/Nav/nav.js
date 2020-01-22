import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">
					Besco Shippers Inc.
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarText">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<Link class="nav-link" href="#" to="/">
								Home <span class="sr-only">(current)</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" href="#" to="/">
								Log Out
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" href="#" to="/upcomingjobs">
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
