/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas. */

function contaCaracterNaString (caracter, string) {
    let contador = 0
    for (let i of string) {
        if (i === caracter) {
            contador += 1
        }
    }
    return contador
}

console.log(contaCaracterNaString("c", "Conhece-te a ti mesmo"))