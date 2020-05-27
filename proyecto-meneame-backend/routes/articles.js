const express = require('express')
// const Articles = require('../models/articles')
const router = express.Router()



router.route("/articles")
  .get((req, res) => {
    let itemList = req.app.get('articles')
    res.json(itemList)
  })

  module.exports = router
