const mongoose = require('mongoose');

// fields for each game entry
const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  shop: {
    type: String,
    required: true
  },
  completed: {
    type: String
  },
  link: {
    type: String
  }
});

// exporting the model
module.exports = mongoose.model("Game", gameSchema);