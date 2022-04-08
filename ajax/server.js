const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.send('Ocorreu um erro,')
        }
        res.send('Concluído com sucesso.')
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body: para pegar parametro no body de uma requisição POST
    // req.query: para pegar parametros na URL da requisição, depois do ?
    // req.params: para pegar parametros diretamente na URL da rquisição, quando não tem ?
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

// app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))