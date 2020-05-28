const express = require('express')
const Articles = require('../models/articles')
const router = express.Router()


router.route("/articles")
  .get(async(req, res) => {
      let articleList = await Articles.find().exec()
      res.json(articleList)
   })

  .post(async  (req, res) => {
    let data=req.body
    try {
      let articleData = {
        title : data.title,
        entry: data.entry,
        category: data.category,
        url : data.url,
      }

      let newArticle = await new Articles(articleData).save();
      res.json(newArticle);
    } catch (e) {
      res.status(500).json({ error: e.message});
    }
  })


module.exports = router
