router.get('/', teamsCtrl.newTeam)

router.get('/new', ensureLoggedIn, teamsCtrl.newTeam);
router.get('/:id', teamsCtrl.show);
router.post('/create', ensureLoggedIn, teamsCtrl.newTeam);
// router.get('/statistics/new', ensureLoggedIn, statisticsCtrl.new);


module.exports = router;