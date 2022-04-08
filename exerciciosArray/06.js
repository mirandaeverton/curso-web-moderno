/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */

function inverteValor(valor) {
    let resultado
    let tipo = typeof valor
    if (tipo == 'number') {
        if (valor == 0) {
            resultado = valor
        } else {
            resultado = -valor
        }

    } else if (tipo == 'boolean') {
        if (valor) {
            resultado = false
        } else {
            resultado = true
        }
    } else {
        resultado = `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}.`
    }
    return resultado
}
console.log(inverteValor(1))
console.log(inverteValor(0))
console.log(inverteValor(true))
console.log(inverteValor(false))