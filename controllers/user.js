var mongoose = require('mongoose')
var User = require('../app/models/user')
var config = require('../config/config.json')
var jwt = require('jsonwebtoken')
var db = require('../config/config.json')


mongoose.connect(config.database);




exports.setup = function (req, res) {
	var user = new User({
		// email: "kimoneeboy@yahoo.ca",
		// first_name: "Jeffery",
		// last_name: "Zhang",
		// password: "1234567",
		// confirm_password: "1234567",
		// admin: true
		// email:req.query.email,
		// first_name: req.query.first_name,
		// last_name: req.query.last_name,
		// password: req.query.password,
		// confirm_password: req.query.confirm_password,
		// admin: true
		email:req.body.email,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
		admin: false
	});

	user.save(function (err) {
		if (err) throw err;

		console.log('User saved successfully');
		
		res.setHeader('Content-Type', 'application/json');
  		res.send(JSON.stringify({ success: true }, null, 4));
	});
}

exports.listUsers = function(req,res){
	User.find({},function(err,users){
		res.send(JSON.stringify(users,null,4));
	})
}


exports.authenticate = function(req, res){
	User.findOne({
		email: req.body.email,
	}, function(err,user){
		if(err) throw err;

		if(!user){
			res.send(JSON.stringify({succss: false, message: 'Authentication failed. User not found.'}));
		}else if(user){
			if(user.password != req.body.password){
				res.send(JSON.stringify({succss: false, message: 'Authentication failed. Wrong password.'}));
			}else{
				var token = jwt.sign(user, db.secret,{
					// expiresInMinutes: 1440
				});

				res.send(JSON.stringify({
					succss: true,
					message: 'Enjoy your token!',
					token: token
				}));
			}
		}
	});
}