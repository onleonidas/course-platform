const http = require("http");
const express = require("express");
const notificacao = require("./notificacao/notificacao.js")
const autenticacao = require("./autenticacao/autenticacao.js")
const autenticacao = require("./cadastrar_cursos/cadastro.js")
const autenticacao = require("./certificado/certificado.js")
const autenticacao = require("./compra/compra.js")

const app = express();

app.get("/hmm", function(req, res) {
    res.send('The area of a square with a width of 10 is ' + mod.perimeter(10));
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));

