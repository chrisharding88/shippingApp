import React, { Component } from 'react';
import { DropdownBarrels, BarrelPrice, Submit } from '../../Components/PurchaseBarrel/purchaseBarrel';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/nav';
import './barrel.css';
import Date from '../../Components/Date/date';

class barrelPage extends Component {
	state = {
		barrelQuantity: '',
		barrelTypes: [],
		selectedBarrel: '',
		quantityError: ''
	};

	componentDidMount() {
		fetch('/api/barrel')
			.then((response) => {
				response.json();
			})
			.then((data) => {
				let barrelsfromAPI = data.map((barrel) => {
					return { value: barrel, display: barrel };
				});
				this.setState({
					barrels: data
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

	handleBuySubmit = (event) => {
		event.preventDefault();
		this.setState({
			barrelQuantity: '',
			selectedBarrel: ''
		});
		this.props.history.push('/form');
	};

	/*numberValidation = () => {
		const validBarrelQuanity = this.state.barrelQuantity;
		let quantityError = '';

		if (isNaN(validBarrelQuanity)) {
			quantityError = 'Please Enter The Amount Of Barrel You Want To Purchase';
		}

		if (quantityError) {
			this.setState({ quantityError });
			return false
		}
	};*/

	render() {
		return (
			<div>
				<Nav />
				<div className="box">
					<div className="box-body-barrel">
						<Date />
						<div className="numberInput">
							<label>Pick A Barrel:</label>
							<input
								type="text"
								value={this.state.barrelQuantity}
								className="barrelQuantity"
								name="barrelQuantity"
								onChange={this.handleInputChange}
								required
							/>
						</div>
						<DropdownBarrels
							value={this.state.selectedBarrel}
							onChange={(event) => this.setState({ selectedBarrel: event.target.value })}
						>
							{this.state.barrels.map((barrel) => (
								<option value={barrel.barrelPrice}>{barrel.barrel}</option>
							))}
						</DropdownBarrels>
						<BarrelPrice
							value={this.state.selectedBarrel}
							onChange={(event) => this.setState({ selectedBarrel: event.target.value })}
						>
							<span value={this.state.selectedBarrel}>{this.state.selectedBarrel}</span>
						</BarrelPrice>
						<div> Total: ${this.state.selectedBarrel * this.state.shippingBarrel}</div>
						<Submit onClick={(e) => this.handleBuySubmit(e)} />
						<Link role="button" className="btn btn-danger" to="/">
							Back
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default barrelPage;
