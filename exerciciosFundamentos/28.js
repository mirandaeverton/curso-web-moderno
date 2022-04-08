//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.


let numerosInteiros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function contaParesEImpares(vetor) {
    let qtdPares = 0
    let qtdImpares = 0

    for (i in vetor) {
        if (vetor[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }

    console.log(`Quantidade de números pares: ${qtdPares}. Quantidade de números ímpares: ${qtdImpares}`)
}

contaParesEImpares(numerosInteiros)