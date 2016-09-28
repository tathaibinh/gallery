var express = require('express')
var getImages = require('./controllers/getImages.js')

var app = express()

app.get('/gallery', function (req, res) {
  res.sendFile(
    "./index.html",
    {
    'root': ".",
  });
})

app.get('/getImages', getImages.index);

app.listen(65534, function () {
	console.log("Server is running at 65534")
})