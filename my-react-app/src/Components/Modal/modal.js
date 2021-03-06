import React, { Component } from 'react';
import { Modal, Dialog, Body, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class MyModal extends Component {
	render() {
		return (
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Confirm</Modal.Title>
				</Modal.Header>

				<Modal.Body>{this.props.children}</Modal.Body>

				<Modal.Footer>
					<Button onClick={() => this.props.toggleModal()} variant="secondary">
						Close
					</Button>
					<Link to="/thankyou">
						<Button onClick={() => this.props.sendShipData()} variant="primary">
							Send
						</Button>
					</Link>
				</Modal.Footer>
			</Modal.Dialog>
		);
	}
}
export default MyModal;
