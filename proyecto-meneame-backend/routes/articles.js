const express = require('express')
const Articles = require('../models/articles')
const {json} = require('express')
const router = express.Router()


router.route("/articles")
  .get(async (req, res) => {
      let articleList = await Articles.find().exec()
      res.json(articleList)
   })

  .post(async (req, res) => {
    let data = req.body;
    console.log(data)
    try {
      let newArticle = await new Articles(articleData).save();

      let articleData = {
      title : data.title,
      subtitle : data.subtitle,
      category : data.category,
      url : data.url
      }

      console.log(newArticle)
      res.json(newArticle)

    } catch (e) {
      res.status(500).json({ error: e.message});
    }
    res.json(newArticle)
  })


module.exports = router
