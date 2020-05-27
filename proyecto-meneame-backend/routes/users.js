const express = require('express')
const router = express.Router()
const User = require('../models/users')

firebase.initializeApp(config.firebaseConfig);

async function CreateUserFirebase(email, password){
  let auth = await firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
  console.log(auth.email.uid)
}

router.route("/users")
  .post(async (req, res) => {
    let data = req.body
    try{
    let NewUser = await CreateUserFirebase(data.email, data.password)

    req.body.password = req.body.password

    let newItem = await new User(req.body).save()

    let createdItem = newItem.toJSON()
    delete createdItem.password

    res.status(201).json(createdItem)
    console.info(NewUser)
    } catch(e){
      res.status(500).json({error: e})
    }
  });
/*     try {
      let newUser = await new User({
      fullname: data.name,
      email: data.email,
      password: data.password,
      uid: data.id
      }).save();
      res.json(newUser);
    }catch(e){
      res.status(500).json({error:e})
    }
  */

 /*  req.body.password = md5(req.body.password)

    let newItem = await new User(req.body).save()

    let createdItem = newItem.toJSON()
    delete createdItem.password

    res.status(201).json(createdItem) */

  // Obtener del request los datos del usuario (p.ej: nombre,a pellidos, email, password, y otros datos adicionaless)
  // Guarda el usuario en firebase con email y password. Firebase me devuelve uid
  // Guardar el resto de datos (nombre, apelidos y otros datos, así como uid) en una tabla de mongo


  /*{ _id: "id_de_mongo"},
  {uid."id de firebase"},
  {nombre: "nombre del usuario"},
  {apellidos: "apellidos del usuario"},
  {otros: "otros datos del usuario"},*/



router.route("/users/:id")
  .get((req,res) => {

    let searchId = parseInt(req.params.id)

    let foundUser = itemList.find(item => item.id === searchId)

    if (!foundUser) {
      res.status(404).json({ 'message': 'El usuario no existe' })
      return
    }
    res.json(foundUser)
  })

  .put ((req , res) => {
    // modificar usuario por su id
  })

  .delete((req,res) => {
    // borrar usuario por su id
  })

// Obtener del request los datos del usuario (p.ej: nombre,a pellidos, email, password, y otros datos adicionaless)
  // Guarda el usuario en firebase con email y password. Firebase me devuelve uid
  // Guardar el resto de datos (nombre, apelidos y otros datos, así como uid) en una tabla de mongo

  /*
  { _id: "id_de_mongo"},
  {uid."id de firebase"},
  {nombre: "nombre del usuario"},
  {apellidos: "apellidos del usuario"},
  {otros: "otros datos del usuario"},
  */
