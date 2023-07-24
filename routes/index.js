var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('statistics/show', { title: 'Express' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    successRedirect: '/basketball',
    failureReirect: '/basketball'
  }
));

module.exports = router;
