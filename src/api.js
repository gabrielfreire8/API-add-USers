const express = require('express')
const api = express()
const routers = require('./routers/routers')

api.use(express.urlencoded({extended:false}))
api.use(express.json())

api.use('/',routers)

module.exports = api

//express.urlencoded({ extended: false }): Este middleware é usado para analisar (parsear) o corpo das requisições HTTP que utilizam dados do tipo application/x-www-form-urlencoded (um formato comum em formulários HTML). 
//Quando extended: false, significa que a aplicação pode receber apenas objetos simples, ou seja, sem suporte para objetos aninhados.