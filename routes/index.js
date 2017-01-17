const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});



router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  var list = tweetBank.find( {name: name} );
  console.log(list); 
  res.render( 'index', {list: list} );
});

module.exports = router;


// router.get('/users/:name', function(req, res) {
//   var name = req.params.name;
//   console.log(name); 
//   var list = tweetBank.find(function(obj){return obj.name.split(" ").join("") === name});
//   console.log(list); 
//   res.render( 'index', list.forEach(function(obj){return obj.content}));
// });