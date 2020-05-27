'use strict'

//dependencias usadas
const express = require('express')
const bearerToken = require('express-bearer-token')
const cors = require('cors')


//instancia de express
const app = express()

//configuramos middlewares usados
app.use(express.json())
app.use(bearerToken())
app.use(cors())


//traemos las rutas de ficheros externos
const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const categoriesRoutes = require('./routes/categories')
const articlesRoutes = require('./routes/articles')
const registerRoutes = require('./routes/register')

//enganchamos las rutas
app.use(categoriesRoutes)
app.use(usersRoutes)
app.use(authRoutes)
app.use(articlesRoutes)
app.use(registerRoutes)



//exponemos la instancia configurada de la app
module.exports = app
