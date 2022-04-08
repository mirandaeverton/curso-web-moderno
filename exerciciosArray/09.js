/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function criaArray (parametro, quantidade) {
    let arrayResultado = []
    if (quantidade > 0) {
        for (let i = 1; i <= quantidade; i++) {
            arrayResultado.push(parametro)
        }
    }
    return arrayResultado
}

console.log(criaArray('Coisa', 5))
console.log(criaArray('Coisa', 0))
console.log(criaArray('Coisa', -2))