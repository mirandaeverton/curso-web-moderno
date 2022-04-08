// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function definirMaiorEMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]
    for (i in vetor) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    console.log(`O maior é ${maior}. O menor é ${menor}.`)
}

definirMaiorEMenor([1,3,5,7,9,2,4,6,8,10,0])