/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplica(multiplicando, multiplicador) {
    let resultado = 0
    if (multiplicador >= 0 && multiplicando >= 0) {
        for (let i = 1; i <= multiplicador; i++) {
            resultado += multiplicando
        }
    }
    return resultado
}

console.log(multiplica(2,3))