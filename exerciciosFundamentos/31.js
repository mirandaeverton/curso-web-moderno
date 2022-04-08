/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function contaNegativos(vetor) {
    let conta = 0
    for (i in vetor) {
        if (vetor[i] < 0) {
            conta++
        }
    }
    return conta
}

console.log(contaNegativos([1,2,3,-4,5,6,-7,-8,-9,-10]))