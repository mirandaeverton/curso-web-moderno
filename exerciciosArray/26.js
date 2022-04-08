/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais. */

function removeVogais (string) {
    const vogais = /[aeiou]/ig
    return string.replaceAll(vogais,'')
}

console.log(removeVogais("Cod3r"))
console.log(removeVogais("Fundamentos"))