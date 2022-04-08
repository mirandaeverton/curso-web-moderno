const porta = 3003 // Declarando a porta que o servidor vai escutar
const bodyParser = require('body-parser')
const express = require('express')
const app = express() // Inicializando o express dentro do módulo

app.use(bodyParser.urlencoded({ extended: true }))

const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => { // Parâmetros em GET sempre no formato :nomeDoParametro
    res.send(bancoDeDados.getProduto(req.params.id)) // Recupera o parâmetro em GET no formato requisição.params.id
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco // No método POST, recupera-se os parâmetros no formato requisição.body.parametro
    })
    res.send(produto) // Somente para dar ao utilizador feedback do produto criado
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco // No método POST, recupera-se os parâmetros no formato requisição.body.parametro
    })
    res.send(produto) // Somente para dar ao utilizador feedback do produto criado
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => { // Função listen() inicia o processo na porta especificada. Pode receber uma callback.
    console.log(`Servidor executando na porta ${porta}.`) // Neste caso, é uma callback simples para informar que o processo foi executado com sucesso.
})