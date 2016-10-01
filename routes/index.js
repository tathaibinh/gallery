var json = require('../config/config.json')

/*
*	Remember to set the root directory option, so that you would not get 'Forbidden with path includes a symlink' error 
*	as path cannot contain '..' in any way for security reason.
*	For more information, please go to https://github.com/expressjs/express/issues/1465
*/
exports.index = function (req, res) {
	res.sendFile(
		json.pathToIndexFile,
		{
			'root': json.rootDirectory,
		}
	)
}

exports.pageNotFound = function (req, res) {
	res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ "status" : "Page not found!" }, null, 4))
}