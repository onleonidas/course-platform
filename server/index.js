const express = require('express')
const server = express()
const router = express.Router()
const fs = require('fs')
const { send } = require('process')
const cors = require('cors');

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
router.put('/:id', (req, res) => {
    const currentContent = readFile()
    const {id} = req.params
    const selectedItem = currentContent.find((item) => item.id === id)
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
router.get('/Popup',(req,res) => {
    const rfn = readFileNotifications()
    let rand = Math.floor(Math.random() * 4);
    res.send(rfn[rand])
})

server.use(router)
server.use(express.json())

server.listen(3000, () =>{
    console.log("Servidor online, Hawking.")
})

