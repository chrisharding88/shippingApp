import React, { Component } from 'react';
import { DropdownCountries, ShipPrice, Submit } from '../../Components/ShippingBarrel/shippingBarrel';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/nav';
import './ship.css';
import Date from '../../Components/Date/date';
import Logo from '../../bescoLogo.jpg';

class shippingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shippingQuantity: '',
			countries: [],
			selectedCountryPrice: '',
			selectedCountry: '',
			date: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleShipSubmit = this.handleShipSubmit.bind(this);
	}
	componentDidMount() {
		fetch('/api/country')
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				let countryArray = [];

				data.forEach((element) => countryArray.push(element));
				this.setState({
					countries: countryArray
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
			selectedCountryPrice: '',
			pickupDate: '',
			countries: []
		});
		console.log('handleShip');
		console.log(this.state.countries);
		this.props.history.push({
			pathname: '/form',
			state: {
				date: this.state.date,
				shippingQuantity: this.state.shippingQuantity,
				selectedCountry: this.state.selectedCountry,
				selectedCountryPrice: this.state.countries.filter(
					(x) => (x.country === this.state.selectedCountry ? x : null)
				)[0].shippingPrice
			}
		});
	};

	render() {
		return (
			<div>
				<Nav />
				<div className="box2">
					<div className="box-body-ship">
						<img src={Logo} alt="bescoLogo" className="bescoLogo" />
						<Date value={this.state.date} />
						<div className="numberInput">
							<label>How Many Barrels Are You Sending:</label>
							<input
								type="text"
								value={this.state.shippingQuantity}
								className="shippingQuantity"
								name="shippingQuantity"
								onChange={this.handleInputChange}
								required
							/>
						</div>
						<select
							name="selectedCountry"
							value={this.state.selectedCountry}
							onChange={(e) => {
								this.handleInputChange(e);
							}}
						>
							{this.state.countries.map((country, index) => (
								<option pricevalue={country.shippingPrice} value={country.country} id={country.country}>
									{country.country}
								</option>
							))}
						</select>

						<ShipPrice
							value={this.state.selectedCountryPrice}
							onChange={(event) => this.setState({ selectedCountryPrice: event.target.value })}
						>
							<span value={this.state.selectedCountryPrice}>{this.state.selectedCountryPrice}</span>
						</ShipPrice>

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
