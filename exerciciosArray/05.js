// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function verificaNumeros (numero1, numero2) {
    if (numero1 === numero2 || numero1 > numero2) {
        return true
    } else {
        return false
    }
}

console.log(verificaNumeros(1,1))
console.log(verificaNumeros(2,1))
console.log(verificaNumeros(1,2))
console.log(verificaNumeros(1,"1"))
console.log(verificaNumeros('1',1))