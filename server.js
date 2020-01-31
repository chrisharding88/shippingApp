const path = require('path');

const express = require('express');
const barreljson = require('./barrelPrices');
const shippingjson = require('./shippingBarrelPrices');
const barrelData = require('./Models/jobDB');
const shippingData = require('./Models/jobDB');
const mongoose = require('mongoose');
// const routes = require('./routes');
const app = express();
// const session = require('express-session');
// const passport = require('passport');
const PORT = process.env.PORT || 3001;

// const index = require('./routes/index');
// const users = require('./routes/users');
// const auth = require('./routes/auth')(passport);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/*app.use(
	session({
		secret: 'thesecret',
		saveUninitialized: false,
		resave: false
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);*/

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('my-react-app/build'));
}
// Add routes, both API and view
// app.use(routes);
app.get('/api/country', function(req, res) {
	res.json(shippingjson);
});
app.get('/api/barrel', function(req, res) {
	res.json(barreljson);
});

app.post('/api/shipping', function(req, res) {
	console.log(req.body);
	shippingData.create(req.body).then((data) => {
		res.json(data);
	});
});

app.post('/api/barrel', function(req, res) {
	console.log(req.body);
	barrelData.create(req.body).then((data) => {
		res.json(data);
	});
});
app.get('/api/shipping', function(req, res) {
	shippingData
		.find(req.query)
		.sort({ date: -1 })
		.then((dbModel) => res.json(dbModel))
		.catch((err) => res.status(422).json(err));
});

app.get('api/shipping/:id', function(req, res) {
	console.log(shippingData);
	shippingData.findById(req.params.id).exec(function(err, shippingData) {
		if (err) {
			console.log('Error');
		} else {
			res.json(shippingData);
		}
	});
});
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/jobslist');

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
