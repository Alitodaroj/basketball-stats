const Players =  require('../models/players');


module.exports = {
    newPlayer, 
    create   
}

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