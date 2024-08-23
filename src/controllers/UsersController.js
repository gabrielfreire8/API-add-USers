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

async listUsers(req, res){
    let users = await User.findAll()
    users != 404 ? res.status(200).json({users})
    : res.status(users).json({
        message:'Erro ao buscar o usuário'
    })
}

async listUser(req, res){
    let id = req.params.id
    
    let user = await User.findById(id)

    if (user === 404){
        return res.status(user).json({
            message:'Erro ao buscar o usuário'
        })
    } else if ( user === undefined){
        return res.status(404).json({
            message:'Usuário não encontrado'
        })
    }else{
        return res.status(200).json({user})
    }

}

async updateUser(req, res){
    let {id, name, email, password, role} = req.body;
    let user = await User.updateUser(id, name, email, password, role);
    if(user === 404){
        return res.status(404).json({
            message: "Usuário não encontrado"
        });
    }else{
        let response = await User.findById(id);
        return res.status(200).json({id: id,
            response: 200,
            user: response});
    };
};



async deleteUser(req,res){
    let id = req.params.id;
    let user = await User.deleteUser(id);
    if (user === 404){
        return res.status(user).json({
            message: "Usuário não encontrado"
        });
    }else if (user === undefined){
        return res.status(404).json({
            message:'Usuário não encontrado'
        });
}else{
    return res.status(200).json({
        message: "Usuário deletado com sucesso"
    });
};
};
}


module.exports = new UsersController


// É feito para criar novos usuarios em uma aplicação web