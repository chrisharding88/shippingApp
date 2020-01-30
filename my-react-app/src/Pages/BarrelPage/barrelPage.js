import React, { Component } from 'react';
import { DropdownBarrels, BarrelPrice, Submit } from '../../Components/PurchaseBarrel/purchaseBarrel';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/nav';
import './barrel.css';
import Date from '../../Components/Date/date';
import Logo from '../../bescoLogo.jpg';

class barrelPage extends Component {
	state = {
		barrelQuantity: '',
		barrels: [],
		selectedBarrelPrice: '',
		selectedBarrel: '',
		date: ''
	};

	componentDidMount() {
		fetch('/api/barrel')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				let barrelArray = [];
				data.forEach((element) => barrelArray.push(element));

				this.setState({
					barrels: barrelArray
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
			selectedBarrel: '',
			barrels: []
		});
		console.log(this.state.barrels);
		this.props.history.push('/form')({
			pathname: '/form',
			state: {
				date: this.state.date,
				barrelQuantity: this.state.barrelQuantity,
				selectedBarrel: this.state.selectedBarrel,
				selectedBarrelPrice: this.state.barrels.filter(
					(x) => (x.barrelArray === this.state.selectedBarrel ? x : null)
				)[0].barrelPrice
			}
		});
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
				<div className="box3">
					<div className="box-body-barrel">
						<img src={Logo} alt="bescoLogo" className="bescoLogo" />
						<Date />
						<div className="numberInput">
							<label>How Many Barrels:</label>
							<input
								type="text"
								value={this.state.barrelQuantity}
								className="barrelQuantity"
								name="barrelQuantity"
								onChange={this.handleInputChange}
								required
							/>
						</div>
						<select
							name="selectedBarrel"
							value={this.state.selectedBarrel}
							onChange={(event) => this.handleInputChange(event)}
						>
							{this.state.barrels.map((barrel) => (
								<option pricevalue={barrel.barrelPrice} value={barrel.barrel}>
									{barrel.barrel}
								</option>
							))}
						</select>
						<BarrelPrice
							value={this.state.selectedBarrelPrice}
							onChange={(event) => this.setState({ selectedBarrelPrice: event.target.value })}
						/>
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
