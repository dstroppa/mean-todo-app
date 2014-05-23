var express  		= require('express');
var app      		= express();
var bodyParser 		= require('body-parser');
var methodOverride 	= require('method-override');
var morgan  		= require('morgan'); 			
var mongoose 		= require('mongoose');
var port  	 		= process.env.PORT || 80;
var config 			= require('./config/config');

mongoose.connect(config.dbUris, config.dbOptions);

app.use(express.static(__dirname + '/public')); 		
app.use(morgan());
app.use(bodyParser());
app.use(methodOverride());

// routes
require('./app/routes.js')(app);

app.listen(port);
console.log("MEAN ToDo App listening on port " + port);
