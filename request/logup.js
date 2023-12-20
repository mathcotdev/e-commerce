const bcrypte = require("bcrypt")
const {admins} = require("../sorce/db/sequelize")
module.exports = (app)=>
{
    app.post("/logup", (req, res)=>
    {
        bcrypte.hash(req.body.name, 10)
         .then(hash => {
            admins.create({          
                name : req.body.name,
                passwort : hash,
                email : req.body.email,
                beschreibung : req.body.beschreibung,
                geschäft : req.body.geschäft,
                bild : "image"

        }).then(j => {res.json(j)})
    })  
    })
}