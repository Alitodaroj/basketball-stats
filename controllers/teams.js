const Team = require('../models/teams');
const teamsCtrl = require('../controllers/teams');

async function show(req, res) {
    const team = await Team.findById(req.params.id);
    res.render('statistics/index', {title: 'List of Teams', team})
  }

  async function create(req, res) {
    req.body.user = req.user ;
    console.log(req.body)
    try {
        await Team.create(req.body);
        const successMessage = 'Team created successfully!';
        res.redirect('/teams');
      } catch (err) {
        console.log(err);
        res.render('statistics/show', { errorMsg: err.message });
      }
    }

  async function index(req, res) {
    const teams = await Team.find({});
    res.render('statistics/index', { title: 'All Teams', teams });
  }
  

function newTeam (req, res) {
    res.render('teams/new', { title: 'Add Teams', errorMsg: '' })
  }

 


  module.exports = {
    new: newTeam, 
    index,
    show,
    create
  }