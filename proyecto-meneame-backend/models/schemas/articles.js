const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticleSchema = new Schema({
  title: { type: String, required: false },
  subtitle : { type: String, required: false },
  category: { type: String, required: false },
  url: { type: String, required: false },
  enabled: { type: Boolean, default: false },
});

module.exports = ArticleSchema

