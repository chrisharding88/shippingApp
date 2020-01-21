import React, { Component } from 'react';
import { NumberInput2, DropdownBarrels, BarrelPrice, Submit } from '../../Components/PurchaseBarrel/purchaseBarrel';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/nav';
import Date from '../../Components/Date/date';

class barrelPage extends Component {
	state = {
		barrelQuantity: '',
		barrelTypes: [],
		selectedBarrel: ''
	};

	/*componentDidMount() {
		fetch()
			.then((Response) => {
				Response.barrelPrices.json();
			})
			.then((data) => {
				let barrelsfromAPI = data.map((barrelType) => {
					return { value: barrelType, display: barrelType };
				});
				this.setState({
					barrelTypes: [ { value: '', display: '(Select a Barrel)' } ]
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

	handleBuySubmit = (event) => {
		// event.preventDefault();
		this.setState({
			barrelQuantity: '',
			selectedBarrel: ''
		});
		this.props.history.push('/form');
	};

	render() {
		return (
			<div>
				<Nav />
				<div className="box">
					<div className="box-body-barrel">
						<Date />
						<NumberInput2 value={this.state.barrelQuantity} onChange={this.handleInputChange} />
						<DropdownBarrels
							value={this.state.selectedBarrel}
							onChange={(event) => this.setState({ selectedBarrel: event.target.value })}
							{...this.state.barrelTypes.map((barrelType) => (
								<option key={barrelType.value} value={barrelType.value}>
									{barrelType.display}
								</option>
							))}
						/>
						<BarrelPrice />
						<Submit onClick={() => this.handleBuySubmit()} />
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
