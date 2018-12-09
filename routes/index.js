var express = require('express');
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to GET A HAND! We lift fog in your mind' });
});

module.exports = router;
