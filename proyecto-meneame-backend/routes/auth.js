const express = require('express')
const jwt = require('jsonwebtoken')
const firebase = require('firebase')
const config = require('../modules/config')
const router = express.Router()

async function checkEmailAndPassword(email, password) {
  let auth = await firebase.auth().signInWithEmailAndPassword(email, password);
  return auth;

}
router.route("/auth/login")
  .post(async (req, res) => {

  let credentials = req.body

  try {
    let auth = await checkEmailAndPassword(credentials.email , credentials.password);

      let payload = {
        id: auth.user.uid,
        email: credentials.email,
        password: credentials.password,
      };

      let token = jwt.sign(payload, config.jwtPassword);

      res.json({ token });

  } catch (e) {
    res.status(401).json({ message: e.message });
  }

});

module.exports = router
