const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')

router.post('/user',UsersController.create)
//Aqui, uma rota HTTP POST é definida para o caminho /user. 
//Sempre que uma requisição POST for feita para este caminho, o método create do UsersController será chamado. 

router.get('/users',UsersController.listUsers)
router.get('/user/:id', UsersController.listUser)
router.delete('/user/:id', UsersController.deleteUser)
router.put('/user', UsersController.updateUser)



module.exports = router

