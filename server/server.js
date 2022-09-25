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
const { Console } = require("console");

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

//save a course
app.post('/Courseupload', function requestHandler(req, res) {
    console.log(req.body);
    filewrite(JSON.stringify(req.body),"data_courses.txt");
    res.end('Hello, World!');
});

//send courses saved to front
app.get('/Courseon', function(req,res){
  //js he tao ruim q n deixa eu transformar isso numa funcao
  fs.readFile("data_courses.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    res.end(data.toString());
  });
});

//chose a random course and send back to front
let is_pop = Boolean;
app.get('/Popup',function(req,res){
  if(typeof(this.is_pop)=="undefined"){
    this.is_pop = true;
  }
  if(this.is_pop == true){
    fs.readFile("promotion.txt", function (err, data) {
      if (err) {
        return console.error(err);
      }
      let dados = data.toString();
      let resp = ""
      for (var i = 0; i < dados.length; i++) {
        resp += dados[i];
        if(dados[i] == '}'){
          let rand = Math.floor(Math.random() * 4);
          if(rand<2){
            res.end(resp);
            i = dados.length;
            break;
          }
          resp = '';
          i+=2;
        }
      }
    });
  }else{
    res.end('no notification');
  }
})

//change not app
app.post('/ChangeNoti', function requestHandler(req, res) {
  if(this.is_pop){
    this.is_pop = false;
    res.end('I will send notifications');
  }else{
    this.is_pop = true;
    res.end('I will not send you notification');
  }
});

app.get('/getNoti', function(req,res){
  if(this.is_pop){
    res.end('I will send notifications');
  }else{
    res.end('I will not send you notification');
  }
  get_person_course('jose');
});

function write_person_course(person,st){
  fs.writeFileSync('something.txt', person);

}
function get_person_course(person){
  try{
    fs.readFile(person+".txt", function (err, data) {
      if (err) {
        return console.error(err);
      }
      let dados = data.toString();
      let resp = ""
      var listOfObjects = [];
      for (var i = 0; i < dados.length; i++) {
        resp += dados[i];
        if(dados[i] == '}'){
          i++;
          resp += dados[i];
          listOfObjects.push(JSON.parse(JSON.stringify(resp)))
          resp = '';
          i++;
        }
      }
      console.log(listOfObjects.length)
      for (var i = 0; i < listOfObjects.length; i++) {
        console.log(listOfObjects[i])
      }
    });
  }catch{
    fs.writeFileSync(person+".txt", person);
  }
}

//send back to front the course information given a course
app.post('/Buycourses',function(req,res){
  fs.readFile("data_courses.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    let dados = data.toString();
    let resp = ""
    for (var i = 0; i < dados.length; i++) {
      resp += dados[i];
      if(dados[i] == '}'){
        //rasp has one json here
        //console.log((JSON.parse(resp)).nome)
        if(((JSON.parse(resp)).nome) == req.body.coursename){
          res.end(((JSON.stringify(resp))));
          i = dados.length;
        }
        resp = '';
        i+=1;
      }
    }
  });
});

//return person config
app.post('/PersonConfig', function(req,res){
  console.log("data receive with name: " + req.body.name);
  console.log("trying to get:" + req.body.info);
  try{
    fs.readFile(req.body.name+".txt", function (err, data) {
      if (err) {
        return console.error(err);
      }
      var listOfObjects = [];
      listOfObjects = get_jsons(data.toString())
      console.log(listOfObjects.length)
      for (var i = 0; i < listOfObjects.length; i++) {
        console.log(typeof(JSON.parse(JSON.stringify(listOfObjects[0]))))
      }
      //res.end(listOfObjects)
    });
  }catch{
    res.end("no data")
  }
});

//this function returns a json property given a string
function get_jsons(data){
  let dados = data;
  let resp = ""
  var listOfObjects = [];
  for (var i = 0; i < dados.length; i++) {
    resp += dados[i];
    if(dados[i] == '}'){
      i++;
      resp += dados[i];
      listOfObjects.push(JSON.parse(JSON.stringify(resp)))
      resp = '';
      i+=2;
    }
  }
  return listOfObjects;
}