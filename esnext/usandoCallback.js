// Usar callback para ler ficheiros JSON com dados de turmas de alunos em um servidor e devolver somente os nomes dos alunos.

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => { // Os dados não vem de uma só vem, mas vem aos poucos. Por isso, é necessário 'Montar' o resultado.
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => a.nome))
    getTurma('B', alunos => { // Cascatear callbacks. Famoso Callback Hell.
        nomes = nomes.concat(alunos.map(b => b.nome))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => c.nome))
            console.log(nomes)
        })
    })
})