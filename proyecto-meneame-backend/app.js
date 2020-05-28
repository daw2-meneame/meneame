'use strict'

//dependencias usadas
const express = require('express')
const bearerToken = require('express-bearer-token')
const cors = require('cors')
const database = require('./modules/database')
const firebase = require('firebase')
const config = require('./modules/config')

firebase.initializeApp(config.firebaseConfig);


//instancia de express
const app = express()

//configuramos middlewares usados
app.use(express.json())
app.use(bearerToken())
app.use(cors())


//traemos las rutas de ficheros externos
//const categoriesRoutes = require('./routes/categories')
const usersRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const articlesRoutes = require('./routes/articles')

app.set("articles", [{
  title: "Primer artículo",
  entradilla: "Resumen del articulo",
  categoria: "Moda",
  URL: "https://www.harpersbazaar.com/es/moda/tendencias/a28025141/articulos-moda-buscados-2019-tendencias/",
  enabled: true
}]),


//enganchamos las rutas
//app.use(categoriesRoutes)
app.use(usersRoutes)
app.use(authRoutes)
app.use(articlesRoutes)


//exponemos la instancia configurada de la app
module.exports = app
