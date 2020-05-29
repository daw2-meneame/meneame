const mongoose = require('mongoose')
const express = require('express')
const Article = require('../models/articles')
const {json} = require('express')
const router = express.Router()

const mustAuth = require('../middleware/mustAuth')


router.route("/articles")
  .get(async (req, res) => {
      let articleList = await Article.find().exec()
      res.json(articleList)
   })

  .post(mustAuth(), async (req, res) => {
    let data = req.body
    try{
      let newArticle = {
        title : data.title,
        subtitle : data.subtitle,
        category : data.category,
        url : data.url
      }
      let articleInMongo = await new Article(newArticle).save()

      res.json(articleInMongo);

    }catch (e){
      res.status(500).json({error:e.message})
    }
});


module.exports = router
