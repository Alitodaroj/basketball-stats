router.post('/players/:id', ensureLoggedIn, playersCtrl.create);
router.delete('/players/:id', ensureLoggedIn, playersCtrl.delete);