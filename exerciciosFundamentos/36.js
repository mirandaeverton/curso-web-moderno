/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function multiplicaVetor(vetor,multiplicador) {
    for (i in vetor) {
        vetor[i] *= multiplicador
    }
    return vetor
}

function multiplicaVetorMaior5(vetor,multiplicador) {
    if (multiplicador > 5) {
        for (i in vetor) {
            vetor[i] *= multiplicador
        }
        return vetor
    }else {
        return 'Multiplicador menor ou igual a 5.'
    }
}

console.log(multiplicaVetor([1,2,3,4,5], 2))
console.log(multiplicaVetorMaior5([1,2,3,4,5], 2))
console.log(multiplicaVetorMaior5([1,2,3,4,5], 7))
