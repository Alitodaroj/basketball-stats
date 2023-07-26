const teamsCtrl = require('../controllers/teams')

router.get('/', teamsCtrl.new)

router.get('/new', ensureLoggedIn, teamsCtrl.new);
router.get('/:id', teamsCtrl.show);
router.post('/create', ensureLoggedIn, teamsCtrl.new);
// router.get('/statistics/new', ensureLoggedIn, statisticsCtrl.new);


module.exports = router;