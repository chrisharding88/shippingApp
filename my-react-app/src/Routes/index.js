var express = require('express');
var router = express.Router();

const loggedIn = function(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.redirect('/login');
	}
};

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	res.render('login');
});

router.get('/signup', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
	res.send(req.session);
});

router.get('/logout', function(req, res) {
	req.logOut();
	res.send('/');
});
module.exports = router;
