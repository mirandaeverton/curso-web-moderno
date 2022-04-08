/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

function progAritm(qtdTermos, primeiroTermo, razao) {
    let progressao = primeiroTermo
    for (let i = 1; i <= qtdTermos; i++) {
        progressao += razao
        console.log(`Termo ${i+1} = ${progressao}.`)
    }
    return progressao
}

function progGeom(qtdTermos, primeiroTermo, razao) {
    let progressao = primeiroTermo
    for (let i = 1; i <= qtdTermos; i++) {
        progressao *= razao
        console.log(`Termo ${i+1} = ${progressao}.`)
    }
    return progressao
}

console.log(progAritm(5,1,2))
console.log(progGeom(5,1,2))