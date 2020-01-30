import axios from 'axios';

export default {
	// Gets all books
	getShipping: function() {
		return axios.get('/api/shipping');
	},
	// Gets the book with the given id
	getShip: function(id) {
		return axios.get(`/api/shipping/${id}`);
	},
	// Deletes the book with the given id
	deleteShip: function(id) {
		return axios.delete(`/api/shipping/${id}`);
	},
	// Saves a book to the database
	saveShipping: function(shippingData) {
		return axios.post('/api/shipping', shippingData);
	}
};
