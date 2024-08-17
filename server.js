require('dotenv').config() // .config()  carrega essas variáveis, permitindo que sejam acessadas no código via process.env.
const api = require('./src/api')

api.listen(process.env.PORT,()=>{
    console.log('API RODANDO!')
})