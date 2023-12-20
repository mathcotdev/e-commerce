const {Sequelize, DataTypes} = require("sequelize")
const admin = require("../models/admin")
const pg = require("pg")

const Db = new Sequelize(
  process.env.POSTGRES_URL +"?sslmode=require",
)

const admins = admin(Db, DataTypes)
const sync = ()=>{
    Db.sync({force:true})
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