const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const session = require('express-session');
const passport = require('passport');
const PORT = process.env.PORT || 3001;


const index = require('./routes/index')
const users = require('./routes/users')
const auth = require('./routes/auth')(passport)



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	session({
		secret: 'thesecret',
		saveUninitialized: false,
		resave: false
	})
);
app.use(passport.initialize())
app.use(passport.session())
app.use('/', index)
app.use('/users', users)
app.use('/auth', auth)


app.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/jobslist');

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
