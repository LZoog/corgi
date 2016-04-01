var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool Corgis' });
});

router.get('/liked', function(req, res, next) {
  res.render('liked', { title: 'Liked Corgis' });
});

module.exports = router;
