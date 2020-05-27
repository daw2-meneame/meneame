const express = require('express')
// instanciar mongo y firebase


app.get("/users", (req,res)=> {
  // para administradores listar los usuarios
})

/* async createUser(){
  try{
    // let auth = await firebase.auth().createUserWithEmailAndPassword(this.user,this.pass)
    // console.log(auth.user.uid)
  }catch(err){
    alert(err.message)
  }
} */

app.post("/users", (req,res) => {
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
});

app.put('/users/:id', (req,res)=>{
  // modificar usuario por su id
})

app.delete('/users/:id', (req,res)=>{
  // borrar usuario por su id
})
