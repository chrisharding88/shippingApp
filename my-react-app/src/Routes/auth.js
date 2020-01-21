var express = require('express');
var router = express.Router();
var User = require('../Models/passwordDB');

module.exports = function(passport) {
	router.post('/signup', function(req, res) {
		var body = req.body;
		username = body.username;
		password = body.password;
		User.findOne({ username: username }),
			function(err, doc) {
				if (err) {
					res.status(500).send('Error Occured');
				} else if (doc) {
					res.status(500).send('Username already exists');
				} else {
					var record = new User();
					(record.username = username), (record.password = record.hashPassword(password));
					record.save(function(err, user) {
						if (err) {
							res.status(500).send('db error');
						} else {
							res.send(user);
						}
					});
				}
			};
	});
	router.post(
		'/login',
		passport.authenticate('local', {
			failureRedirect: '/',
			successRedirect: '/home'
		}),
		function name(req, res) {
			res.send('hey');
		}
	);
	return router;
};
