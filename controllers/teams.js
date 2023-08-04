const Team = require('../models/teams');
const teamsCtrl = require('../controllers/teams')
const Player = require('../models/players');

async function show(req, res) {
  try {
    const team = await Team.findById(req.params.id).populate('players')
    res.render('teams/show', { title: 'List of Teams', team });
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}

async function create(req, res) {
  req.body.user = req.user;
  console.log(req.body);
  try {
    await Team.create(req.body);
    const successMessage = 'Team created successfully!';
    res.redirect('/teams');
  } catch (err) {
    console.log(err);
    res.render('/', { errorMsg: err.message });
  }
}

async function index(req, res) {
  try {
    const teams = await Team.find({});
    res.render('teams/index', { title: 'All Teams', teams });
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}

async function newTeam(req, res) {
  const players = await Player.find({});
  res.render('teams/new', { title: 'Add Teams', errorMsg: '', players });
}

async function deleteTeam(req, res) {
  try {
    await Team.deleteOne({
      _id: req.params.id,
    });
    res.redirect('/teams');
  } catch (e) {
    console.log(e);
    res.redirect('/teams');
  }
}

async function editTeam(req, res) {
  try {
    const team = await Team.findById(req.params.id);
    res.render('teams/edit', { title: 'Edit Team', team });
  } catch (err) {
    console.error(err);
    res.redirect('/'); 
  }
}

async function renderHomePage(req, res) {
  try {
    const teams = await Team.find({});
    const players = await Player.find({});

    res.render('teams/index', { title: 'All Teams', teams, players });
  } catch (error) {
    console.error('Error rendering homepage:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function editTeam(req, res) {
  try {
    const player = await Player.findById(req.params.id);
    res.render('teams/show', { title: 'Edit Team', Team });
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}

async function updateTeam(req, res) {
  try {
    const TeamId = req.params.id;
    const updatedTeamData = req.body;
    const team = await Team.findByIdAndUpdate(req.params.id, updatedTeamData);
    console.log(req.body, team)
    res.redirect('/teams'); // Redirect to the players list or a success page
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}

module.exports = {
  new: newTeam,
  index,
  show,
  create,
  delete: deleteTeam,
  editTeam,
  renderHomePage,
  updateTeam,
};
