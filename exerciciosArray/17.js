/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */

const soma = (anterior, atual) => anterior + atual

function somaElementosArray (array) {
    return array.reduce(soma,0)
}

console.log(somaElementosArray([1,2,3,4,5]))