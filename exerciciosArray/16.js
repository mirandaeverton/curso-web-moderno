/* uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não. */

function verificaAnoBissexto(ano) {
    if (ano <= 0){
        return 'Este ano não é bissexto.'
    } else if (ano % 400 == 0) {
        return 'Este ano é bissexto.'
    } else if (ano % 100 == 0) {
        return 'Este ano não é bissexto.'
    } else if (ano % 4 == 0) {
        return 'Este ano é bissexto.'
    } else {
        return 'Este ano não é bissexto.'
    }
}

console.log(verificaAnoBissexto(2100))
console.log(verificaAnoBissexto(2024))