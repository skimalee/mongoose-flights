var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('HITTING HITTING')
  res.redirect('flights')
});

module.exports = router;
