const http = require("http");
const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors');


const notificacao = require("./notificacao/notificacao.js");
const autenticacao = require("./autenticacao/autenticacao.js");
const cadastrar_cursos = require("./cadastrar_cursos/cadastro.js");
const certificado = require("./certificado/certificado.js");
const compra = require("./compra/compra.js");

http.createServer(app).listen(3000,'localhost', () => console.log("Servidor rodando local na porta 3000"));

app.use(cors())
app.use(express.json());

app.get("/login", function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    resposta = [
        {"login": "John","senha": 22,},
        {"login": "Cena","senha": 10,},
    ]
        res.send(resposta)
});

app.get("/Courseupload", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

//this function writes to a file without erasing the that saved there
function filewrite(st,path_file){
    fs.readFile(path_file, function (err, data) {
        if (err) {
          return console.error(err);
        }
        dados = data.toString()
        console.log("Data read : " + dados);
        dados += "\n" + st;
    
        fs.writeFile(
            path_file,
            dados,
            function (err) {
              if (err) {
                return console.error(err);
              }
            }
          );
    })
}
app.post('/Courseupload', function requestHandler(req, res) {
    console.log(req.body);
    filewrite(JSON.stringify(req.body),"data_courses.txt");
    res.end('Hello, World!');
});

