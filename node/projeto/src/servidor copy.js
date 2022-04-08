const porta = 3003 // Declarando a porta que o servidor vai escutar

const express = require('express')
const app = express() // Inicializando o express dentro do módulo

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // Será convertido para JSON automaticamente
})

app.listen(porta, () => { // Função listen() inicia o processo na porta especificada. Pode receber uma callback.
    console.log(`Servidor executando na porta ${porta}.`) // Neste caso, é uma callback simples para informar que o processo foi executado com sucesso.
})