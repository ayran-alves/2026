//server.js
//npm init -y => INICIA O PROJETO DO node
//npm install express

const express = require("express")
const app = express()
//localhost: 3000
app.get("/", function(req, res) {
    res.send("servidor Funcionando")
})
app.listen(3000, function(){
    console.log("servidor rodando na porta 3000")
})