const express = require('express')
const router = express.Router()
const User = require('../models/users')
const firebase = require('firebase')


async function createUserFirebase(email, password){

  let auth = await firebase.auth().createUserWithEmailAndPassword(email, password)
  return auth
}

router.route("/users")
  .post(async (req, res) => {
    let data = req.body

    try{
      let newUser = await createUserFirebase(data.email, data.password)
      let UserData = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        _id: newUser.user.uid
      }
     let newUserInMongo = await new User(UserData).save();

    res.json(newUserInMongo)

    } catch(e){
      res.status(500).json({error: e.message})
    }
  });

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

module.exports = router
