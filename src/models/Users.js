const knex = require('../data/conection')

class User{
    async new(name,email,password,role){
        try { 
            await knex.insert({
                name: name, email: email, password: password, role: role})
                .table('users') // aqui é aonde sera criado a tabela (users)

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new User

// As funções Try e catch são inseridas para capturar se houver algum erro na inserção