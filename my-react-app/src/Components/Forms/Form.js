import React, { Component } from 'react';
import Col from '../Col';
import Row from '../Row';
import './styles.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
// import ConfirmPage from '../../Pages/ConfirmPage/confirmPage';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			email: '',
			telephoneNumber: '',
			firstNameError: '',
			lastNameError: '',
			addressError: '',
			cityError: '',
			stateError: '',
			zipError: '',
			emailError: '',
			modal: false
		};

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	componentDidMount() {
		console.log(this.props.location.state);
	}
	handleFormChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			this.setState({
				/*firstName: '',
				lastName: '',
				address: '',
				city: '',
				state: '',
				zip: '',
				email: '',
				telephoneNumber: '',*/
				modal: true
			});
		}
	};

	toggleModal = () => {
		this.setState({ modal: !this.state.modal });
	};

	sendShipData = () => {
		const formData = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			email: this.state.email
		};
		console.log(formData);
		return fetch('/api/shipping', {
			method: 'POST',
			headers: {
				'content-type': 'application.json'
			},
			body: JSON.stringify(formData)
		})
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				console.log('Created Gist:', data);
			});
	};

	validate = () => {
		//Dependencies
		let firstNameError = '';
		let lastNameError = '';
		let addressError = '';
		let cityError = '';
		let stateError = '';
		let zipError = '';
		let emailError = '';
		let telNumberError = '';

		//Regular Expresion
		const letters = /^[A-Za-z]+$/;

		const firstName = this.state.firstName;
		const lastName = this.state.lastName;
		const address = this.state.address;
		const city = this.state.city;
		const state = this.state.state;
		const zip = this.state.zip;
		const email = this.state.email;
		const telephoneNumber = this.state.telephoneNumber;

		//First Name Validation
		//If the first name input is empty or if it doesn't display any letters
		if (firstName.length < 0 || !firstName.match(letters)) {
			firstNameError = 'Please enter your first name';
		}
		//Displays the error
		if (firstNameError) {
			this.setState({ firstNameError });
			return false;
		}

		//Last Name Validation
		//If the last name input is empty or if it doesn't display any letters
		if (lastName.length < 0 || !lastName.match(letters)) {
			lastNameError = 'Please enter your last name';
		}
		//Displays the error
		if (lastNameError) {
			this.setState({ lastNameError });
			return false;
		}

		//City Validation
		//If the city input is empty or if it doesn't display any letters
		if (city.length < 0 || !city.match(letters)) {
			cityError = 'Please enter your city';
		}
		//Displays the error
		if (cityError) {
			this.setState({ cityError });
			return false;
		}

		//Address Validation
		//If the address input is empty
		if (address.length < 0) {
			addressError = 'Please enter your address';
		}
		//Displays the error
		if (addressError) {
			this.setState({ addressError });
			return false;
		}

		// Email Validation
		//If the email doesn't include the '@' symbol or if the input box is empty
		if (!email.includes('@') || email.length < 0) {
			emailError = 'Invalid Email';
		}
		//Displays the error
		if (emailError) {
			this.setState({ emailError });
			return false;
		}

		//Telephone Validation

		// If the Telephone number shows a letter or if it's not 10 digits
		if (isNaN(telephoneNumber) || telephoneNumber.length < 10) {
			telNumberError = 'Please enter the telephone number';
		}
		//Displays the error
		if (telNumberError) {
			this.setState({ telNumberError });
			return false;
		}

		//State Validation
		//If the state input has one length or if it's empty or if it doesn't display any letters
		if (state.length < 2 || state.length < 0 || !state.match(letters)) {
			stateError = 'Please enter the state';
		}
		//Displays the error
		if (stateError) {
			this.setState({ stateError });
			return false;
		}

		//Zip Validation
		// If the zip code is not a number or if it's empty
		if (isNaN(zip) || zip.length < 0) {
			zipError = 'Please enter the zip code';
		} else if (zip.length < 5) {
			// If the zip has less than five digits
			zipError = 'Zip code must be five digits';
			console.log(zip);
			console.log(zipError);
		}
		//Displays the error
		if (zipError) {
			this.setState({ zipError });
			return false;
		}
		return true;
	};

	render() {
		return (
			<form>
				{this.state.modal ? (
					<Modal toggleModal={this.toggleModal} sendShipData={this.sendShipData}>
						<p>First Name: {this.state.firstName}</p>
						<p>Last Name: {this.state.lastName}</p>
						<p>Address: {this.state.address}</p>
						<p>City: {this.state.city}</p>
						<p>State: {this.state.state}</p>
						<p>Zip: {this.state.zip}</p>
						<p>Telephone Number: {this.state.telephoneNumber}</p>
						<p>Date of Pickup:{this.state.pickupDate}</p>
						<p>Barrel Quantity: {this.props.location.state.shippingQuantity}</p>
						<p>Destination:{this.props.location.state.countries.country}</p>
						<p>
							Total:{this.props.location.state.shippingQuantity *
								this.props.location.state.selectedCountry}
						</p>
					</Modal>
				) : null}
				<Row className="form-row">
					<Col className="col" size="20">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							className="form-control"
							id="firstName"
							name="firstName"
							value={this.state.firstName}
							onChange={this.handleFormChange}
							placeholder="First Name"
						/>
						<div>
							{this.state.firstNameError ? (
								<div style={{ fontSize: 12, color: 'red' }}>{this.state.firstNameError}</div>
							) : null}
						</div>
					</Col>
					<Col className="col" size="20">
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							className="form-control"
							id="lastName"
							name="lastName"
							value={this.state.lastName}
							onChange={this.handleFormChange}
							placeholder="Last Name"
						/>
						<div>
							{this.state.lastNameError ? (
								<div style={{ fontSize: 12, color: 'red' }}>{this.state.lastNameError}</div>
							) : null}
						</div>
					</Col>
				</Row>
				<Row className="form-row">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						className="form-control"
						id="address"
						name="address"
						value={this.state.address}
						onChange={this.handleFormChange}
						placeholder="Address"
					/>
					<div>
						{this.state.addressError ? (
							<div style={{ fontSize: 12, color: 'red' }}>{this.state.addressError}</div>
						) : null}
					</div>
				</Row>

				<Row className="form-row">
					<Col className="col" size="20">
						<label htmlFor="City">City</label>
						<input
							type="text"
							className="form-control"
							id="city"
							name="city"
							value={this.state.city}
							onChange={this.handleFormChange}
							placeholder="City"
						/>
						<div>
							{this.state.cityError ? (
								<div style={{ fontSize: 12, color: 'red' }}>{this.state.cityError}</div>
							) : null}
						</div>
					</Col>
					<Col className="col" size="2">
						<label htmlFor="State">State</label>
						<input
							type="text"
							className="form-control"
							id="state"
							name="state"
							value={this.state.state}
							onChange={this.handleFormChange}
							maxLength="2"
							placeholder="State"
						/>
						<div>
							{this.state.stateError ? (
								<div style={{ fontSize: 12, color: 'red' }}>{this.state.stateError}</div>
							) : null}
						</div>
					</Col>
					<Col className="col" size="10">
						<label htmlFor="Zip">Zip</label>
						<input
							type="text"
							className="form-control"
							id="zip"
							name="zip"
							value={this.state.zip}
							onChange={this.handleFormChange}
							maxLength="5"
							placeholder="Zip"
						/>
						<div>
							{this.state.zipError ? (
								<div style={{ fontSize: 12, color: 'red' }}>{this.state.zipError}</div>
							) : null}
						</div>
					</Col>
				</Row>

				<Row className="form-row">
					<Col className="col" size="10">
						<label htmlFor="email">Email Address</label>
						<input
							type="text"
							className="form-control"
							id="email"
							name="email"
							value={this.state.email}
							onChange={this.handleFormChange}
							placeholder="Email Address"
						/>
						<div>
							{this.state.emailError ? (
								<div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
							) : null}
						</div>
					</Col>
					<Col className="col" size="10">
						<label htmlFor="telNumber">Telephone Number</label>
						<input
							type="text"
							className="form-control"
							id="telNumber"
							name="telephoneNumber"
							value={this.state.telephoneNumber}
							onChange={this.handleFormChange}
							placeholder="Telephone Number"
							maxLength="12"
						/>
					</Col>
					<div>
						{this.state.telNumberError ? (
							<div style={{ fontSize: 12, color: 'red' }}>{this.state.telNumberError}</div>
						) : null}
					</div>
				</Row>

				<button
					type="submit"
					className="btn btn-primary"
					onClick={(e) => {
						this.handleFormSubmit(e);
					}}
				>
					Submit
				</button>
			</form>
		);
	}
}

export default Form;
