var mongoose = require('mongoose')
var User = require('../app/models/user')
var config = require('../config/config.json')
var bodyParser = require('body-parser')

mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

exports.setup = function (req, res) {
	var user = new User({
		email: kimoneeboy@yahoo.ca,
		first_name: Jeffery,
		last_name: Zhang,
		password: 1234567,
		confirm_password: 1234567,
		admin: true
		// email:req.query.email,
		// first_name: req.query.first_name,
		// last_name: req.query.last_name,
		// password: req.query.password,
		// confirm_password: req.query.confirm_password,
		// admin: true
	});

	user.save(function (err) {
		if (err) throw err;

		console.log('User saved successfully');
		
		res.setHeader('Content-Type', 'application/json');
  		res.send(JSON.stringify({ success: true }, null, 4));
	});
}

exports.users = function(req,res){
	User.find({},function(err,users){
		res.json(users);
	})
}
