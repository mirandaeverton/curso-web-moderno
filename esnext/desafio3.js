// Criar uma função para ler o arquivo dados.xt usando promise

const fs = require('fs')
const path = require('path')

let ficheiro

function lerArquivoLocal(arquivo) {
    const caminho = path.join(__dirname, arquivo)
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf8', (_, conteudo) => {
            resolve(conteudo)
        })
    }) 
}

lerArquivoLocal('dados.txt').then(console.log)

