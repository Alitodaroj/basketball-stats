const basketball = require('mongoose');
const Schema = basketball.Schema;

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

module.exports = basketball.model('User', userSchema);