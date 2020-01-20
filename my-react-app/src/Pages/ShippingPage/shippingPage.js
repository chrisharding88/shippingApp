import React, { Component } from 'react';
import { NumberInput, DropdownCountries, ShipPrice, Submit } from '../../Components/ShippingBarrel/shippingBarrel';
import { Link } from 'react-router-dom';
class shippingPage extends Component {
	state = {
		shippingQuantity: '',
		countries: [],
		selectedCountry: ''
	};

	/*componentDidMount() {
		fetch()
			.then((Response) => {
				Response.shippingBarrelPrices.json();
			})
			.then((data) => {
				let countriesfromAPI = data.map((country) => {
					return { value: country, display: country };
				});
				this.setState({
					countries: [ { value: '', display: '(Select a Country)' } ]
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}*/

	handleInputChange = (event) => {
		const { number, value } = event.target;
		this.setState({
			[number]: value
		});
	};

	handleShipSubmit = (event) => {
		// event.preventDefault();
		/*this.setState({
			shippingQuantity: '',
			selectedCountry: ''
		});*/
		console.log('handleShip');
		// return <Redirect to="/form" />;
		this.props.history.push('/form');
	};

	render() {
		/*if (Submit) {
			<Redirect to={Form} />;
		}*/

		return (
			<div>
				<NumberInput value={this.state.shippingQuantity} onChange={this.handleInputChange} />
				<DropdownCountries
					value={this.state.selectedCountry}
					onChange={(event) => this.setState({ selectedCountry: event.target.value })}
					{...this.state.countries.map((country) => (
						<option key={country.value} value={country.value}>
							{country.display}
						</option>
					))}
				/>
				<ShipPrice />
				<Submit
					onClick={() => {
						this.handleShipSubmit();
					}}
				/>
				<Link role="button" className="btn btn-danger" to="/">
					Back
				</Link>
			</div>
		);
	}
}

export default shippingPage;
