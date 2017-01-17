const express = require('express');
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
	noCache: true
}); // point nunjucks to the proper directory for templates

const routes = require('./routes/');

app.listen(3000, function() {
	console.log("Server listening");
});

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use('/', function(req, res, next) {
	console.log("Request:", req.method, req.path);

	next();
});

app.use('/', routes);

app.use('/special', function(req, res, next) {
	console.log("You have reached the special page.");
	next();
});