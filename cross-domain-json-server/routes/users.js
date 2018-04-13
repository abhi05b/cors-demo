var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
  res.send('respond with a resource');
});
router.options('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers','crappy-header');
  res.send('respond with a resource');
});

module.exports = router;
