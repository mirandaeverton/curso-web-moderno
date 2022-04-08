// Usar Promises para ler ficheiros JSON com dados de turmas de alunos em um servidor e devolver somente os nomes dos alunos.

const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => { // Os dados não vem de uma só vem, mas vem aos poucos. Por isso, é necessário 'Montar' o resultado.
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(erro) {
                    reject(erro)
                }
            })
        })
    })
    
}

let nomes = []

// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => a.nome))
//     getTurma('B').then(alunos => { // Cascatear callbacks. Famoso Callback Hell.
//         nomes = nomes.concat(alunos.map(b => b.nome))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(c => c.nome))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))