import React from 'react';

const JobsTable = (props) => {
	return (
		<div>
			<table className="table table-hover table-dark">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Address</th>
						<th scope="col">Telephone Number</th>
						<th scope="col">Pick Up</th>
						<th scope="col">Delivery</th>
						<th scope="col">Destination</th>
						<th scope="col">Price</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.children}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default JobsTable;
