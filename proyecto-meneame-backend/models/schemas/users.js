const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: String, required: false, default: 'user' },
  enabled: { type: Boolean, default: false },
});

module.exports = userSchema
