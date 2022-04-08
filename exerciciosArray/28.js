/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro. */

const filtrarPorQuantidadeDeDigitos =  (array, qtde) => {
    const comprimento = e => e.toString().length == qtde
    return array.filter(comprimento)
}
console.log(filtrarPorQuantidadeDeDigitos([11,22,33,444,555,6,7777], 2))
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))