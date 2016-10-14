var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
	email: String,
	first_name: String,
	last_name: String,
	password: String,
	confirm_password: String,
	admin: Boolean
}));