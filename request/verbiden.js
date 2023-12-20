const {admins} = require("../sorce/db/sequelize")

module.exports = (app)=> {
    app.post("/admin", (req,res)=>{
        admins.findOne({where : {email : req.body.email}})
         .then(admin=>{
            if(admin)
            {
                res.json(admin)
            }
            else
            res.send("ok")
         })
    })
}