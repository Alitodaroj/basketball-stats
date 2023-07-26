const teams = require('mongoose');
const Schema = teams.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String, 
  avatar: String
}, {
  timestamps: true
});

module.exports = teams.model('User', userSchema);