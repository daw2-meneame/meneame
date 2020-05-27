const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticleSchema = new Schema({
  title: { type: String, required: true },
  entradilla: { type: String, required: true },
  categoria: { type: String, required: true },
  URL: { type: String, required: true },
  enabled: { type: Boolean, default: false },
});

module.exports = ArticleSchema

