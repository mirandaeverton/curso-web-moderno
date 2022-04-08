// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcularMediaAritmetica(vetor) {
    let soma = 0
    for (i in vetor) {
        soma += vetor[i]
    }
    let media = soma / vetor.length
    return media
}

console.log(calcularMediaAritmetica([1,2,3,4,5,6,7]))