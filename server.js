var express = require('express')
var app = express()

app.get('/gallery', function (req, res) {
  res.send('Hello World')
})

app.get('*', function (req, res) {
  res.sendfile('./index.html')
})

app.listen(65534, function () {
  console.log("Server is running at 65534")
})