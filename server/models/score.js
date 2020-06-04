const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  Score: String,// String is shorthand for {type: String}
  nom: String,
  date: { type: Date, default: Date.now },
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
