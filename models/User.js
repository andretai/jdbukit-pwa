const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  entries: { type: Array, default: [] },
  achieve: { type: Array, default: [] },
  registerDate: { type: String, default: new Date().toLocaleDateString() }
});

module.exports = Entry = mongoose.model('user', userSchema);