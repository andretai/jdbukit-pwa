const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  type: { type: String, required: true },
  spent: { type: Number, required: true },
  saved: { type: Number, required: true },
  day: { type: Number, default: new Date().getDay() },
  date: { type: String, default: new Date().toLocaleDateString() }
});

module.exports = Entry = mongoose.model('entry', entrySchema);