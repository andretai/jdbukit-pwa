const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  userId: { type: String, required: true },
  goal: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: Boolean, default: false },
  date: { type: String, default: new Date().toLocaleDateString() }
});

module.exports = Goal = mongoose.model('goal', goalSchema);