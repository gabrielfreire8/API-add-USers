var User = require('../models/Users')

class UsersController{
    async create(req, res){
        let {name, email, password, role} = req.body
        await User.new(name, email, password,role)
        .then(()=>{
            res.status(200)
            res.json({value: "ok"})
        })
        .catch(err=>{
            res.status(400)

        })
    }
}

module.exports = new UsersController


// É feito para criar novos usuarios em uma aplicação web