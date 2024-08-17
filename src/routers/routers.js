const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')

router.post('/user',UsersController.create)
//Aqui, uma rota HTTP POST é definida para o caminho /user. 
//Sempre que uma requisição POST for feita para este caminho, o método create do UsersController será chamado. 

module.exports = router

