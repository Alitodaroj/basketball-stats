var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('../config/ensureLoggedIn');

const playersCtrl = require('../controllers/players');

router.post('/', ensureLoggedIn, playersCtrl.create);
router.get('/edit/:id', playersCtrl.edit);
router.post('/:id', playersCtrl.create)

router.get('/new/:id', playersCtrl.new);


module.exports = router;