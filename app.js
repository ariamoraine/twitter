const express = require( 'express' );
const nunjucks = require("nunjucks");
const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

const routes = require('./routes/');

// var locals = {
//   title: 'An Example',
//   people: [
//     { name: 'Gandalf'},
//     { name: 'Frodo' },
//     { name: 'Hermione'}
//   ]
// };

// const dogs = [{name: 'fido'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen(3000, function(){
  console.log("Server listening");
  });

app.use(express.static('public'));

app.use('/', function (req, res, next) {
 console.log("Request:", req.method, req.path);
  //res.sendFile('../public/stylesheets/style.css', {root : __dirname});
 next();
});

app.use('/', routes);

app.use('/special', function (req, res, next) {
 console.log("You have reached the special page.");
 next();
});

// app.get('/', function(req, res, next){
//   //res.send("Welcome!");
//   nunjucks.configure('views', {noCache: true});
//   nunjucks.render('index.html', locals, function (err) {
//     res.render('index', {title: 'Hall of Fame', people: dogs});
//   });
// });

// app.get('/news', function(req, res, next){
//   res.send("Welcome to the news page!");
// });

// app.use(function (err, req, res, next) {
//   console.error("ERROR!", err.msg || "idk!");
//   res.sendStatus(err.status || 400);
// });
