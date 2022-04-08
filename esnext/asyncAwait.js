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
                } catch (erro) {
                    reject(erro)
                }
            })
        })
    })
}

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // Retorna um objeto do tipo AsyncFunction. Para utilizar as informações, é necessário chamar a função then()

const nomesAlunos = obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => {
        return nomes
    })

setTimeout (() => {
    console.log(nomesAlunos)
}, 2000);
