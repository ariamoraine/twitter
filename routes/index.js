const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', {tweets: list} );
});


router.get('/tweets/:id', function (req, res) {
  var id = Number(req.params.id);
  var list = tweetBank.find( {id: id} );
  res.render('index', {tweets: list});
});

// router.get('/#about', function (req, res) {
//   res.render('index', {showForm: true});
// });


module.exports = router;


// router.get('/users/:name', function(req, res) {
//   var name = req.params.name;
//   console.log(name);
//   var list = tweetBank.find(function(obj){return obj.name.split(" ").join("") === name});
//   console.log(list);
//   res.render( 'index', list.forEach(function(obj){return obj.content}));
// });
