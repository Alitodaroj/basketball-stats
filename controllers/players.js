const Players =  require('../models/players');
const Team = require('../models/teams');

module.exports = {
    new: newPlayer, 
    create,
    delete: deletePlayers,
    edit,
    update   
}

async function create(req, res) {
  req.body.user = req.user;
  const team =  await Team.findById(req.params.id)
  team.user = req.user
  console.log(req.body, req.user)
  try {
    const player = await Players.create(req.body)
    team.players.push(player._id)
    await team.save();
    const successMessage = 'Team created successfully!';
    res.redirect(`/teams/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.render('/', { errorMsg: err.message });
      }
    }


async function newPlayer (req, res) {
  const team =  await Team.findById(req.params.id)
  res.render('players/new', {title: 'Add Players', errorMsg:'', team})
}

async function deletePlayers(req, res) {
  try {
await Players.deleteOne({
  _id:req.params.id
})
res.redirect('/teams/new');
}
catch(e){
console.log(e);
res.redirect('/teams/new');
}
}

async function edit (req, res) {
  const player = await Players.findById(req.params.id);
  res.render('players/edit', {title: 'Added Players', errorMsg:'', player})
}

async function update(req, res) {
  try {
    const player = await Players.findById(req.params.id);
    const updatedPlayerData = req.body;
    await Players.findByIdAndUpdate(player, updatedPlayerData);
    res.redirect('/teams/new'); // Redirect to the players list or a success page
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}

async function show(req, res) {
  try {
    const team = await Team.findById(req.params.id);
    res.render('teams/show', { title: 'List of Teams', team });
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}