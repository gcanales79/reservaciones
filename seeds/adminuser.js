require('dotenv').config()
var db = require("../models");

db.User.create({
    email: "gustavo.canales@me.com",
    password: process.env.passadmin,
    role: "admin"
  },
  ).then(data => {

    console.log("Usuario Creado")
    })
  .catch(function (err) {
    console.log(err);
  });