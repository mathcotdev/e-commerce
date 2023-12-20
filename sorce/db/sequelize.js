const {Sequelize, DataTypes} = require("sequelize")
const admin = require("../models/admin")

const Db = new Sequelize(
  process.env.POSTGRES_URL
)

const admins = admin(Db, DataTypes)
const sync = ()=>{
    Db.sync()
     .then(()=>{
      admins.create({
        name : "alfred",
        passwort : "Fred",
        email : "alfred@gmail.com",
        beschreibung : "FCB",
        geschäft : "FCB",
        bild : "image"
      })
      console.log("connecter")
 })
} 

 module.exports = {sync, admins}