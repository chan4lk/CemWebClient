var express = require('express');
var serveStatic = require('serve-static')
var server = express();
server.use(serveStatic('./', {'index': ['index.html', 'default.htm']}))
var port = process.env.port || 3000;
server.listen(port);
console.log('listing started on port ' + port);