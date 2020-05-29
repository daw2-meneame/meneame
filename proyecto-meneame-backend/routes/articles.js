const mongoose = require('mongoose')
const express = require('express')
const Article = require('../models/articles')
const {json} = require('express')
const router = express.Router()


router.route("/articles")
/*   .get(async (req, res) => {
      let articleList = await Articles.find().exec()
      res.json(articleList)
   }) */

  .post(async (req, res) => {
    let data = req.body

    console.info(data.title)
    try{
      let newArticle = {
        title : data.title,
        subtitle : data.subtitle,
        category : data.category,
        url : data.url
      }
        let articleInMongo = await new Article(newArticle).save()

        res.json(articleInMongo);

        console.log(articleInMongo)

    }catch (e){
      res.status(500).json({error:e.message})
      console.log('no se conecto con la base de datos');
    }

    });


module.exports = router
