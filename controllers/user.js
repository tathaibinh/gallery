var mongoose = require('mongoose')
var User = require('../app/models/user')
var config = require('../config/config.json')

mongoose.connect(config.database);

exports.create = function (req, res) {
	var user = new User({ 
		name: req.query.name,
		password: req.query.password,
		admin: true
	});

	user.save(function (err) {
		if (err) throw err;

		console.log('User saved successfully');
		
		res.setHeader('Content-Type', 'application/json')
  	res.send(JSON.stringify({ success: true }, null, 4))
	});
}