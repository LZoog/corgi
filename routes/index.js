var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');
/* GET home page. */

router.get('/', function(req, res, next) {
  Corgi.find(function(err, corgi) {
     if (err) console.log(err);
     res.render('index', { title: 'Cool Corgis', corgi: corgi[Math.floor(Math.random() * corgi.length)] });
  });
});

router.get('/liked', function(req, res, next) {
  Corgi.find(function(err, corgi) {
   if (err) console.log(err);
   res.render('liked', { title: 'Liked Corgis', corgi: corgi });
  });
});

router.put('/', function(req, res) {
  var id = req.body.id;
  var makeTrue = req.body.makeTrue;
  var makeFalse = req.body.makeTrue;

  if (makeTrue != null) {
    Corgi.findByIdAndUpdate(id, { liked: true }, function(err, user) {
      if (err) console.log(err);
      res.redirect('/');
    });
  } else {
    Corgi.findByIdAndUpdate(id, { liked: false }, function(err, user) {
      if (err) console.log(err)
      res.redirect('/');
    });
  }
});

module.exports = router;
