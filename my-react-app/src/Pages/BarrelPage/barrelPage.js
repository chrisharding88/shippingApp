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
		selectedBarrel: ''
	};

	componentDidMount() {
		fetch('/api/barrel')
			.then((response) => {
				return response.json();
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
			selectedBarrel: '',
			barrels: []
		});
		console.log(this.state.barrels);
		this.props.history.push('/form')({
			pathname: '/form',
			state: {
				barrelQuantity: this.state.barrelQuantity,
				selectedBarrel: this.state.selectedBarrel,
				barrels: this.state.barrels.find((i) => i.barrel === this.state.barrels)
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
						<div> Total: ${this.state.selectedBarrel * this.state.barrelQuantity}</div>
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
