const Players =  require('../models/players');



async function create(req, res) {
  req.body.user = req.user;
  try {
    await Players.create(req.body);
    const successMessage = 'Team created successfully!';
    res.redirect('/teams/new');
  } catch (err) {
    console.log(err);
    res.render('/', { errorMsg: err.message });
      }
    }


async function newPlayer (req, res) {
    res.render('teams/new', {title: 'Added Players', errorMsg:''})
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

async function show(req, res) {
  try {
    const player = await Player.findById(req.params.id);
    res.render('players/show', { title: 'Player Details', player });
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}

async function editPlayer(req, res) {
  try {
    const player = await Player.findById(req.params.id);
    res.render('edit', { title: 'Edit Player', player });
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}

async function updatePlayer(req, res) {
  try {
    const playerId = req.params.id;
    const updatedPlayerData = req.body;
    await Player.findByIdAndUpdate(playerId, updatedPlayerData);
    res.redirect('/players'); // Redirect to the players list or a success page
  } catch (err) {
    console.error(err);
    res.redirect('/'); // Redirect to homepage or an error page
  }
}


module.exports = {
    newPlayer, 
    create,
    delete: deletePlayers,
    show,
    editPlayer,
    updatePlayer   
}