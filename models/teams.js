const mongoose = require('mongoose');
const Schema = mongoose.Schema

const teamSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    
    // Don't forget to add the comma above then
    // add the 3 new properties below
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    teamName: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Teams', teamSchema);