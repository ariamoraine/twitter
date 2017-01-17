const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/');

//static routing
app.use('/', routes);
app.use(express.static('public'));

//setting up nunjucks
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
app.set('view engine', 'html'); // have res.render work with html files
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

///////////////////////////
// next two lines are for parsing POST body submission MIDDLEWARE
//////////////////////////
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json


app.listen(3000, function() {
  console.log('Server listening');
});

app.use('/', function(req, res, next) {
  console.log('Request:', req.method, req.path);
  next();
});
