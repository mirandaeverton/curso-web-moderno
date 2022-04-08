/* Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro. */

function removePropriedade (objeto, propriedade) {
    delete objeto[propriedade]
    const objResultado = objeto
    return objResultado
}

console.log(removePropriedade({ a: 1, b: 2, c: 3}, 'c'))