const mongoose = require('mongoose');
const Schema = mongoose.Schema

const playersSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    playerName: String,
    points: {
    type: Number,
    required: true,
  },
    rebounds: {
    type: Number,
    required: true,
  },
    assists: {
    type: Number,
    required: true,
  }
},
  {
    timestamp: true,
  }
  );

  module.exports = mongoose.model('Players', playersSchema);