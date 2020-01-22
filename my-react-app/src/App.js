import React, { Component } from 'react';
import Password from '../src/Components/Password/password';
import HomePage from '../src/Pages/HomePage/homePage';
import Form from '../src/Components/Forms/Form';
import ShippingPage from '../src/Pages/ShippingPage/shippingPage';
import BarrelPage from '../src/Pages/BarrelPage/barrelPage';
import UpcomingJobsPage from '../src/Pages/UpcomingJobsPage/upcomingJobs';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						// {/* <Route exact path="/login" Component={Password}/> */}
						<Route exact path="/" component={HomePage} />
						<Route exact path="/shippingpage" component={ShippingPage} />
						<Route exact path="/form" component={Form} />
						<Route exact path="/barrelpage" component={BarrelPage} />
						<Route exact path="/upcomingjobs" component={UpcomingJobsPage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
