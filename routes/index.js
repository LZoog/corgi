var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');
/* GET home page. */

router.get('/', function(req, res, next) {
  Corgi.find(function(err, corgi) {
     if (err) console.log(err);
     res.render('index', { title: 'Cool Corgis', corgi: corgi });
  });
});

router.get('/liked', function(req, res, next) {
  Corgi.find(function(err, corgi) {
   if (err) console.log(err);
   res.render('liked', { title: 'Liked Corgis', corgi: corgi });
  });
});

module.exports = router;
