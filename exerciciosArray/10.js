/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function criaStringMais (quantidade) {
    let resultado = ''
    for (let i = 1; i <= quantidade; i++) {
        resultado += '+'
    }
    console.log(resultado)
}

criaStringMais(5)