var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('../config/ensureLoggedIn');

const playersCtrl = require('../controllers/players');

router.post('/', ensureLoggedIn, playersCtrl.create);

router.delete('/:id', playersCtrl.delete)

module.exports = router;