const express = require('express')
const router = express.Router()
// instanciar mongo y firebase


router.route("/users")
  .post((req, res)=>{

  })

router.route("/users/:id")
  .get((req,res) => {
    let itemList = req.app.get('articles')
    let searchId = parseInt(req.params.id)

    let foundItem = itemList.find(item => item.id === searchId)

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }
    res.json(foundItem)
  })

  .put ((req , res) => {
    // modificar usuario por su id
  })

  .delete((req,res) => {
    // borrar usuario por su id
  })


/*async function CreateUser(email, password){
  let user = await firebase.auth().createUserWithEmailAndPassword(this.user,this.pass)
  return user
 }*/


/* app.post("/users", (req,res) => {
  let nose = req.body
console.log(nose)
  try{
    let NewUser= await CreateUser(credencials.email, credentials.password)
  }
  });*/

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


