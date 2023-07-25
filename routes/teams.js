const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const teamsCtrl = require('../controllers/teams');
const ensureLoggedIn = require('../config/ensureLoggedIn.js');

//GET Team page
router.get('/', teamsCtrl.index);

router.get('/new', ensureLoggedIn, teamsCtrl.newTeam);
router.get('/:id', teamsCtrl.show);
router.post('/create', ensureLoggedIn, teamsCtrl.newTeam);
// router.get('/statistics/new', ensureLoggedIn, statisticsCtrl.new);


module.exports = router;