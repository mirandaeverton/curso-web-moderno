/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */

const verificaSePar = (valor, indice) => valor % 2 == 0 && indice % 2 == 0

function receberSomenteOsParesDeIndicesPares(array) {
    let resultado = array.filter(verificaSePar)
    return resultado
}

const teste = [0,1,2,3,41,5,6,7,8,9,10]

console.log(receberSomenteOsParesDeIndicesPares(teste))