var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var logInSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true }
});

logInSchema.methods.hashPassword = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

logInSchema.methods.compaerPassword = function(password) {
	return bcrypt.compareSync(password, hash);
};

var LogIn = mongoose.model('Users', logInSchema, 'Users');

module.exports = LogIn;
