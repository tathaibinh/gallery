var express = require('express')
var mongoose = require('mongoose')
var json = require('./config/config.json')
var homePage = require('./routes/index.js')
var images = require('./controllers/images.js')
var User = require('./app/models/user')
var app = express()

/*
*	In order to serve static file in mean stack, we need to use express.static built-in middleware function in Express.
*	Without using the express.static, express simply would not allow user to access or it simply cannot recognize the file/folder.
*	Using __dirname means that we are using absolute path of directory since we run express app elsewhere.
*	For more information, please go to http://expressjs.com/en/starter/static-files.html
*/
app.use(express.static(__dirname + '/public'));

/*
*	You may use a Chrome extension called Postman to test these requests
*	For more information, please go to https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
*/
app.get('/gallery', homePage.index)
app.get('/images', images.get)
app.put('/images', images.put)
app.post('/images', images.post)
app.delete('/images', images.delete)
app.get('*', homePage.pageNotFound)

app.listen(json.serverPortNumber, function () {
	console.log("Server is running at " + json.serverPortNumber)
})

