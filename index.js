const http = require('http')
const saludo = require('./saludo')
const server = http.createServer(requestController)

function requestController(){
    console.log("hola maa")
    console.log(saludo)
}

server.listen(4000)