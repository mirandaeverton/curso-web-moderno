/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

const eNumero = numero => typeof numero == 'number'

function filtrarNumeros(array) {
    return array.filter(eNumero)
}

console.log(filtrarNumeros([1, 2, 3, 'a', '1', '10', 10]))