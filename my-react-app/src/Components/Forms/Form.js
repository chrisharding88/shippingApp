import React, { Component } from 'react';
import Col from '../Col';
import Row from '../Row';
import './styles.css';

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
			emailError: ''
		};

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.PreventDefault();
		const isValid = this.validate();
		if (isValid) {
			this.setState({
				firstName: '',
				lastName: '',
				address: '',
				city: '',
				state: '',
				zip: '',
				email: '',
				telephoneNumber: ''
			});
			console.log(this.state.firstName);
		}
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
		const lastName = this.state.lasttName;
		const address = this.state.address;
		const city = this.state.city;
		const state = this.state.state;
		const zip = this.state.zip;
		const email = this.state.email;
		const telephoneNumber = this.state.telephoneNumber;

		//First Name Validation
		//If the first name input is empty or if it doesn't display any letters
		if (firstName.length < 0 || !firstName.value.match(letters)) {
			firstNameError = 'Please enter your first name';
		}
		//Displays the error
		if (firstNameError) {
			this.setState({ firstNameError });
			return false;
		}

		//Last Name Validation
		//If the last name input is empty or if it doesn't display any letters
		if (lastName.length < 0 || !lastName.value.match(letters)) {
			lastNameError = 'Please enter your last name';
		}
		//Displays the error
		if (lastNameError) {
			this.setState({ lastNameError });
			return false;
		}

		//City Validation
		//If the city input is empty or if it doesn't display any letters
		if (city.length < 0 || !city.value.match(letters)) {
			cityError = 'Please enter your last name';
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
		if (state.length < 2 || state.length < 0 || !state.value.match(letters)) {
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
						{this.state.firstNameError ? (
							<div style={{ fontSize: 12, color: 'red' }}>{this.state.firstNameError}</div>
						) : null}
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
						{this.state.lastNameError ? (
							<div style={{ fontSize: 12, color: 'red' }}>{this.state.lastNameError}</div>
						) : null}
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
					{this.state.addressError ? (
						<div style={{ fontSize: 12, color: 'red' }}>{this.state.addressError}</div>
					) : null}
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
						{this.state.cityError ? (
							<div style={{ fontSize: 12, color: 'red' }}>{this.state.cityError}</div>
						) : null}
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
						{this.state.stateError ? (
							<div style={{ fontSize: 12, color: 'red' }}>{this.state.stateError}</div>
						) : null}
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
						{this.state.zipError ? (
							<div style={{ fontSize: 12, color: 'red' }}>{this.state.zipError}</div>
						) : null}
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
						{this.state.emailError ? (
							<div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
						) : null}
					</Col>
					<Col className="col" size="10">
						<label htmlFor="telNumber">Telephone Number</label>
						<input
							type="text"
							className="form-control"
							id="telNumber"
							name="telNumber"
							value={this.state.telephoneNumber}
							onChange={this.handleFormChange}
							placeholder="Telephone Number"
							maxLength="12"
						/>
					</Col>
					{this.state.telNumberError ? (
						<div style={{ fontSize: 12, color: 'red' }}>{this.state.telNumberError}</div>
					) : null}
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
