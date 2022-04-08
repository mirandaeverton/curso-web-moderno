/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function contaNumerosEntre10E20(vetor) {
    console.log(vetor)
    var contagem = 0
    for (let i = 0; i < vetor.length; i++) {
        console.log(vetor[i])
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            contagem++
        }
        return `${contagem} números dentro do intervalo.`
    }
}

let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetor2 = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
let vetor3 = [10, 20, 11, 12, 13, 14, 15]
//console.log(contaNumerosEntre10E20(vetor1))
console.log(contaNumerosEntre10E20(vetor2))
//console.log(contaNumerosEntre10E20(vetor3))