import React, { Component } from 'react';
import Nav from '../../Components/Nav/nav';
import './jobsTable.css';
import API from '../../Utils/API';

class UpcomingJobsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shipping: [],
			date: '',
			address: '',
			telephone: '',
			shippingQuantity: '',
			barrelQuantity: '',
			destination: '',
			shippingPrice: ''
		};
	}

	componentDidMount() {
		API.getShip()
			.then((res) =>
				this.setState({
					shipping: res.data.items
				})
			)
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<Nav />
				<div>
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Address</th>
								<th scope="col">Telephone Number</th>
								<th scope="col">Pick Up</th>
								<th scope="col">Delivery</th>
								<th scope="col">Destination</th>
								<th scope="col">Price</th>
							</tr>
						</thead>
						{this.state.shipping.map((shipping, index) => (
							<div key={index}>
								<tbody
									date={shipping.data.date}
									address={shipping.data.address}
									telephone={shipping.data.telephoneNumber}
									shippingQuantity={shipping.data.shippingQuantity}
									barrelQuantity={shipping.data.barrelQuantity}
									destination={shipping.data.country}
									shippingPrice={shipping.data.shippingPrice}
								>
									<td>{this.state.date}</td>
									<td>{this.state.address}</td>
									<td>{this.state.telephone}</td>
									<td>{this.state.shippingQuantity} Barrels</td>
									<td>{this.state.barrelQuantity}</td>
									<td>{this.state.destination}</td>
									<td>{this.state.shippingPrice}</td>
								</tbody>
							</div>
						))}
					</table>
				</div>
			</div>
		);
	}
}
export default UpcomingJobsPage;
