'use strict';

var port = process.env.PORT || 8080;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./app/routes/index.js');
var api = require('./app/api/timestamp.js');

//require('dotenv').load();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

routes(app);
api(app);


app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});