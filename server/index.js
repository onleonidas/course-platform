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

router.get('/GetCourseForId', (req, res) => {
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
//retorna uma promocao aleatoria
router.post('/Popup',(req,res) => {
    const rfn = readFile()
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
    if(i>=4){i = 3}
    if(rfc[i].notfication_config== "I want to receive promotion notification"){
        var count = Object.keys(rfn).length;
        let rand = Math.floor(Math.random() * count);
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
router.post('/getConfig',(req,res) => {
    const user_data = readFileConfig()
    try{
        var i = 0;
        while(true){
            if(user_data[i].email==req.body.name){
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

//salva um novo usario 
router.post('/SaveUserConfig',(req,res) => {
    const read_user_data = readFileConfig() 
    const new_user_data = req.body
    read_user_data.push(new_user_data)
    fs.writeFileSync('./user-config.json', JSON.stringify(read_user_data), 'utf-8')
})

//================================================
//retorna todos os cursos
router.get('/GetAllNot',(req,res) => {
    const rfc = readFile()
    res.send(rfc);
})

//================================================
//retorna todos os cursos de um usuário
router.post('/getUserCourses',(req,res) => {
    const user_data = readFileConfig()
    try{
        let found_user = user_data.find(curr_user => curr_user.email === req.body.email);
        const array_courses = found_user.courses_owned;
        res.send(array_courses);

    }catch{
        res.send("could not find user");
    }
})

//================================================
// Adiciona um curso a um usuario
// passar um json com name: e course_id: 
router.post('/AddCourse',(req,res) => {
    const user_data = readFileConfig()
    try{
        let found_user = user_data.find(curr_user => curr_user.email === req.body.email);
        const array_courses = found_user.courses_owned;

        const new_course = {
            course_id: req.body.course_id,
            user_course_progress: 0
        }
        array_courses.push(new_course);
        found_user.courses_owned = array_courses;
        fs.writeFileSync('./user-config.json', JSON.stringify(user_data), 'utf-8');

        res.send(200);
    }catch{
        res.send("could not find user");
    }
})

//================================================
//altera o progresso do usuário no curso
//recebe um json com email do usuário, o curso que vai ser atualizado e +1 ou -1 para caso o progresso seja positivo ou negativo
router.post('/updateCouseProgress',(req,res) => {
    const user_data = readFileConfig()
    try{
        const found_user = user_data.find(curr_user => curr_user.email === req.body.email);
        const course_to_update = found_user.courses_owned.find(course => course.course_id === req.body.course_id);
        course_to_update.user_course_progress += req.body.progress_update;
        if (course_to_update.user_course_progress < 0) 
            course_to_update.user_course_progress = 0;
        if (course_to_update.user_course_progress > 1) 
            course_to_update.user_course_progress = 1;
            
        fs.writeFileSync('./user-config.json', JSON.stringify(user_data), 'utf-8');

        res.send(200);
    }catch{
        res.send("could not find course");
    }
})

//================================================
//devolve certificado TESTE
router.post('/generateCertificate', (req,res) => {
    // const user_data = readFileConfig()
    try{
        res.send(req.body)
    }catch{
        res.send("could not find data")
    }
})

server.use(router)
server.use(express.json())

server.listen(3000, () =>{
    console.log("Servidor online, Hawking.")
})

