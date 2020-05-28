const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  firstname: { type: String, required: true, unique: true },
  lastname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  profile: { type: String, required: false, default: 'user' },
  _id: {type: String, required: true},
  enabled: { type: Boolean, default: false },
});

module.exports = userSchema
