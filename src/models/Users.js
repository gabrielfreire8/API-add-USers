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



async findAll(){
    try {
        let users = await knex.select(['name','email']).table('users');
        return users;
    } catch (error) {
        console.log(error)
        return 404;;
    };
};

async findById(id){
    try {
        let user = await knex.select(['name','email']).where({id:id}).table('users') ;
        if ( user.length > 0){
            return user;
        }else{
            return undefined;
        }
    } catch (error) {
        console.log(error);
        return 404;
        
    };
};

async updateUser(id, name, email, password, role){
    try{
        let user = await knex("users").update({
            id: id,
            name: name,
            email: email,
            password: password,
            role: role
        }).where({id:id});
        if(user > 0){
            return user;
        }else{
            return 404;
        }

    }catch(error){
        console.log(error);
        return 404;
    };
    };

async deleteUser(id){
    try {
        let user = await knex.delete().where({id:id}).table("users");
        if(user < 1){
            return 404;
        }else{
            return user;
        }
    }catch(error){
        console.log(error);
        return 404;
    }
};
};



module.exports = new User

// As funções Try e catch são inseridas para capturar se houver algum erro na inserção