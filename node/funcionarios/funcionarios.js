const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher = e => e.genero == "F"
const chineses = e => e.pais == "China"
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

axios.get(url).then(response => {
    const funcionarios = response.data
       const resultado = funcionarios.filter(chineses).filter(mulher).reduce(menorSalario)
    console.log(resultado)
})

