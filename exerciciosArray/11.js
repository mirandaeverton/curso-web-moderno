/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array: */

function primeiroEUltimoElemento(array) {
    let primeiro = array[0]
    let ultimo = array[array.length - 1]
    return [primeiro, ultimo]
}

console.log(primeiroEUltimoElemento([1, 2, 3, 4, 5, 6]))