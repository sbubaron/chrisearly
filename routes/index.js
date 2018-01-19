var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/mailgun', function(req, res, next) {
  //code for mail gun

  res.send({result: 'Mail Gun'});
});


/* GET home page. */
router.get('/twilio', function(req, res, next) {
  //code for twilio

  res.send({result: 'Twilio'});
});

module.exports = router;
