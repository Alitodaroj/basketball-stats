const Team = require('../models/basketball');
const teamsCtrl = require('../controllers/teams');

async function show(req, res) {
    const team = await Team.findById(req.params.id);
    res.render('partials/show', {title: 'List of Teams', team})
    
  }
  async function create(req, res) {
      // remove any whitespace at start and end of cast
      req.body.cast = req.body.cast.trim();
      // split cast into an array if it's not an empty string - using a regular expression as a separator
      if (req.body.team) req.body.team = req.body.cast.split(/\s*,\s*/);
      try {
        await Team.create(req.body);
        res.redirect('/statistics/new');
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('statistics/new', { errorMsg: err.message });
  }
  }

  async function index(req, res) {
    const teams = await Team.find({});
    res.render('statistics/index', { title: 'All Teams', teams });
  }
  

function newTeam (req, res) {
    res.render('statistics/new', { title: 'Add Teams', errorMsg: '' })
  }


  module.exports = {
    new: newTeam, 
    index,
    show,
    create
  }