var express = require('express'),swig = require('swig');
var server = express();


//Config Swig
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '\\app\\views');

server.use(express.static('./public'));

require('./app/controllers/home')(server);

server.listen(8000);
