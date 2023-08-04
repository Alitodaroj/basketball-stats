var express = require('express');
var router = express.Router();
const passport = require('passport');
const teamsCtrl = require('../controllers/teams')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/teams');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/teams/index',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/teams/index');
  });
})



module.exports = router;
