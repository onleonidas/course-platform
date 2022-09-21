const http = require("http");
const express = require("express");
const app = express();
const fs = require('fs')
const cors = require('cors')

const notificacao = require("./notificacao/notificacao.js");
const autenticacao = require("./autenticacao/autenticacao.js");
const cadastrar_cursos = require("./cadastrar_cursos/cadastro.js");
const certificado = require("./certificado/certificado.js");
const compra = require("./compra/compra.js");

http.createServer(app).listen(3000,'localhost', () => console.log("Servidor rodando local na porta 3000"));

app.use(cors())

app.get("/hmm", function(req, res) {
    console.log(req.url,req.method);

        
    res.setHeader('Content-Type', 'text/html');
    res.send(JSON.stringify('hmmmmm'))

    /*
    fs.readFile('../course-plataform/src/index.html', (err,data) => {
        res.write(data)
        res.end()
    })*/
});


