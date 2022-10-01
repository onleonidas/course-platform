const express = require('express')
const server = express()
const router = express.Router()
const fs = require('fs')
const { send } = require('process')
const cors = require('cors');
const { Console } = require('console')

server.use(express.json({extended: true}))
server.use(cors())

const readFile = () => {
    const content = fs.readFileSync('./items.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updatedFile = JSON.stringify(content)
    fs.writeFileSync('./items.json', updatedFile, 'utf-8')
}

//pega todos os elementos
router.get('/Courseon', (req, res) => {
    const content = readFile()
    res.send(content)
})


// cria novo elemento
router.post('/Courseupload', (req, res) => {
    const { title, desc, price, link, img } = req.body
    const currentContent = readFile()
    const id = Math.random().toString(32).substring(2, 9)
    console.log(id)
    currentContent.push({ id, title, desc, price, link, img })
    writeFile(currentContent)
    res.send({ title, desc, price, link, img })
})


//pega por index
router.get('/:id', (req, res) => {
    const currentContent = readFile()
    const {id} = req.params
    const selectedItem = currentContent.find((item) => item.id === id)
    console.log(selectedItem)
    res.send(selectedItem)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    currentContent.splice(selectedItem, 1)
    writeFile(currentContent)
    res.send("item apagado")
})

const readFileNotifications = () => {
    const content = fs.readFileSync('./notifications.json', 'utf-8')
    return JSON.parse(content)
}
//pega a notificação
router.post('/Popup',(req,res) => {
    const rfn = readFileNotifications()
    const rfc = readFileConfig()
    try{
        var i = 0;
        while(true){
            if(rfc[i].name==req.body.name){
                break;
            }else{
                i++;
            }
        }
    }catch{
        res.send("no notification");
    }
    if(rfc[i].notfication_config= "I want to recieve promotion notification"){
        let rand = Math.floor(Math.random() * 4);
        res.send(rfn[rand]);
    }else{
        res.send("no notification");
    }
})

//======= settings
//retorna o status de configuração de um usuario
const readFileConfig = () => {
    const content = fs.readFileSync('./user-config.json', 'utf-8')
    return JSON.parse(content)
}
//retorna a config dado o user
router.post('/getNotiConfig',(req,res) => {
    const user_data = readFileConfig()
    try{
        var i = 0;
        while(true){
            if(user_data[i].name==req.body.name){
                break;
            }else{
                i++;
            }
        }
    }catch{
        res.send("could not find data")
    }
    res.send(user_data[i])
})

//recebe um nome q ja existe e atualiza o banco
const updateFileConfig = (content,newdata) => {
    const user_data = readFileConfig();
    var i = 0;
    try{
        while(true){
            if(user_data[i].name == content){
                user_data[i].notfication_config = newdata;
                break;
            }
            i++;
        }
    }catch{
        console.log("could not update file")
    }
    fs.writeFileSync('./user-config.json', JSON.stringify(user_data), 'utf-8')
}
//muda a notificacao de usuario
router.post('/ChangeNoti',(req,res) => {
    const user_data = readFileConfig()
    try{
        var i = 0;
        while(true){
            if(user_data[i].name==req.body.name){
                break;
            }else{
                i++;
            }
        }
        str1 = "I want to receive promotion notification";
        str2 = "I do not want to recieve promotion notification";
        if(user_data[i].notfication_config==str1){
            updateFileConfig(req.body.name,str2);
            res.send(str2);
        }else{
            updateFileConfig(req.body.name,str1);
            res.send(str1);
        }
    }catch{
        res.send("could not find data")
    }
})


router.post('/SaveUserConfig',(req,res) => {
    const read_user_data = readFileConfig() 
    const new_user_data = req.body
    read_user_data.push(new_user_data)
    console.log("recebi os dados: " + JSON.stringify(read_user_data))
    fs.writeFileSync('./user-config.json', JSON.stringify(read_user_data), 'utf-8')
})

//================================================

server.use(router)
server.use(express.json())

server.listen(3000, () =>{
    console.log("Servidor online, Hawking.")
})

