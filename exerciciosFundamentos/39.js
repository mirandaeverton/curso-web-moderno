/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function trocaVetores(vetorA, vetorB) {
    if (vetorA.length != vetorB.length) {
        console.log('Os vetores tem tamanhos diferentes.')
    }else {
        [vetorA, vetorB] = [vetorB, vetorA]
    }
    console.log(`Vetor A: ${vetorA}`)
    console.log(`Vetor B: ${vetorB}`)
}

trocaVetores([1,2,3,4,5],[5,4,3,2,1])