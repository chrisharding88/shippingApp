import React, { Component } from 'react';
import { DropdownCountries, ShipPrice, Submit } from '../../Components/ShippingBarrel/shippingBarrel';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/nav';
import './ship.css';
import Date from '../../Components/Date/date';

class shippingPage extends Component {
	state = {
		shippingQuantity: '',
		countries: [],
		selectedCountry: ''
	};

	componentDidMount() {
		fetch('/api/country')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				let countriesfromAPI = data.map((country) => {
					return { value: country, display: country };
				});
				this.setState({
					countries: data
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleShipSubmit = (event) => {
		event.preventDefault();
		this.setState({
			shippingQuantity: '',
			selectedCountry: '',
			countries: []
		});
		console.log('handleShip');
		this.props.history.push('/form');
	};

	render() {
		return (
			<div>
				<Nav />
				<div className="box">
					<div className="box-body-ship">
						<Date />
						<div className="numberInput">
							<label>How Many Barrels Are You Sending:</label>
							<input
								type="text"
								value={this.state.shippingQuantity}
								className="barrelQuantity"
								name="shippingQuantity"
								onChange={this.handleInputChange}
								required
							/>
						</div>
						<DropdownCountries
							value={this.state.selectedCountry}
							onChange={(event) => this.setState({ selectedCountry: event.target.value })}
						>
							{this.state.countries.map((country) => (
								<option value={country.shippingPrice}>{country.country}</option>
							))}
						</DropdownCountries>

						<ShipPrice
							value={this.state.selectedCountry}
							onChange={(event) => this.setState({ selectedCountry: event.target.value })}
						>
							<span value={this.state.selectedCountry}>{this.state.selectedCountry}</span>
						</ShipPrice>
						<div> Total: ${this.state.selectedCountry * this.state.shippingQuantity}</div>
						<div className="ship-buttons">
							<Submit
								onClick={(e) => {
									this.handleShipSubmit(e);
								}}
								id="btn-1-ship"
							/>
							<Link role="button" className="btn btn-danger" id="btn-2-ship" to="/">
								Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default shippingPage;
