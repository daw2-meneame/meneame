const express = require('express')
const jwt = require('jsonwebtoken')
//const firebase = require('firebase');

// firebase.initializeApp(config.firebaseConfig);

/* async function checkEmailAndPassword(email, password) {
  let auth = await firebase.auth().signInWithEmailAndPassword(email, password);
  return auth;
}

app.post("/auth/login", async (req, res) => {
  let credentials = req.body;
  try {
    let auth = await checkEmailAndPassword(
      credentials.email,
      credentials.password
    );

      let payload = {
        id: auth.user.uid,
        fullname: "Álex Martín",
        profile: "superadmin",
      };

      let token = jwt.sign(payload, JWT_PASSWORD);
      res.json({ token });

  } catch (e) {
    res.status(401).json({ message: e.message });
  }
});
 */
