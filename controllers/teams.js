const Team = require('../models/teams');
const teamsCtrl = require('../controllers/teams');
const Players = require('../models/players');

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
        res.redirect('/teams/new');
      } catch (err) {
        console.log(err);
        res.render('/', { errorMsg: err.message });
      }
    }

  async function index(req, res) {
    try {
      const players = await Player.find({}); 
      res.render('teams/index', { title: 'All Teams', players});
    } catch (err) {
      console.error(err);
      res.redirect('/'); 
    }
  }

  

async function newTeam (req, res) {
  const players = await Players.find({})
  res.render('teams/new', { title: 'Add Teams', errorMsg: '', players})
  }

  async function deleteTeam(req, res) {
        try {
      await Team.deleteOne({
        _id:req.params.id
      })
      res.redirect('/teams');
    }
    catch(e){
      console.log(e);
      res.redirect('/teams');
    }
  }

  async function editTeam(req, res) {
    try {
      const team = await Team.findById(req.params.id);
      res.render('edit', { title: 'Edit Team', team });
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
    editTeam
  }