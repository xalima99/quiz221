const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,// String is shorthand for {type: String}
  auteur: String,
  correct:   String,
  incorrect: {type: Array},
  image: String,
  date: { type: Date, default: Date.now },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
