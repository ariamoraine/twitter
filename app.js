const express = require( 'express' );

const app = express(); 


app.listen(3000, function(){
  console.log("Server listening"); 
  }); 

app.use('/', function (req, res, next) {
 console.log("Request:", req.method, req.path);
 next();
});

app.use('/special', function (req, res, next) {
 console.log("You have reached the special page.");
 next();
});


app.get('/', function(req, res, next){
  res.send("Welcome!"); 
}); 

app.get('/news', function(req, res, next){
  res.send("Welcome to the news page!"); 
}); 

