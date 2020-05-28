const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticleSchema = new Schema({
  title: { type: String, required: false },
  entry: { type: String, required: false },
  category: { type: String, required: false },
  URL: { type: String, required: false },
  enabled: { type: Boolean, default: false },
});

module.exports = ArticleSchema

