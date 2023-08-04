const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const teamsCtrl = require('../controllers/teams');
const ensureLoggedIn = require('../config/ensureLoggedIn.js');

//GET Team page
router.get('/', teamsCtrl.index);

router.get('/new', ensureLoggedIn, teamsCtrl.new);
router.get('/:id', teamsCtrl.show);
router.post('/', ensureLoggedIn, teamsCtrl.create);

router.delete('/:id', teamsCtrl.delete)
router.get('/:id/edit', teamsCtrl.editTeam);
router.put('/:id', teamsCtrl.updateTeam)



module.exports = router;