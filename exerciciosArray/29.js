/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array. */

function encontraSegundoMaior(array) {
    let maior = array[0]
    let menor = array[0]
    array.forEach(e => {
        if (e > maior) {
            maior = e
        } else if (e < menor) {
            menor = e
        }
    })
    let segundoMaior = menor
    array.forEach(e => {
        if (e < maior && e > segundoMaior) {
            segundoMaior = e
        }
    })
    return segundoMaior
}
console.log(encontraSegundoMaior([12, 16, 1, 5]))
console.log(encontraSegundoMaior([8, 4, 5, 6]))