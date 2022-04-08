/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function calcularAlturaCriancas(alturaCrianca1, taxaCrescCrianca1,alturaCrianca2, taxaCrescCrianca2) {
// Taxa de crescimento é em cm/ano.    
    
    let alturaCriancaAlta
    let alturaCriancaBaixa
    let taxaCrescCriancaAlta
    let taxaCrescCriancaBaixa

    if (alturaCrianca1 > alturaCrianca2) {
        alturaCriancaAlta = alturaCrianca1
        taxaCrescCriancaAlta = taxaCrescCrianca1
        alturaCriancaBaixa = alturaCrianca2
        taxaCrescCriancaBaixa = taxaCrescCrianca2
    }else if(alturaCrianca2 > alturaCrianca1) {
        alturaCriancaAlta = alturaCrianca2
        taxaCrescCriancaAlta = taxaCrescCrianca2
        alturaCriancaBaixa = alturaCrianca1
        taxaCrescCriancaBaixa = taxaCrescCrianca1
    }else {
        console.log('As duas crianças tem a mesma altura.')
    }

    calcularCrescimentoCrianca(alturaCriancaBaixa, taxaCrescCriancaBaixa,alturaCriancaAlta, taxaCrescCriancaAlta)
    
}

function calcularCrescimentoCrianca(alturaCriancaBaixa, taxaCrescCriancaBaixa,alturaCriancaAlta, taxaCrescCriancaAlta) {
    let i = 1
    while (i < 100) {
                if (alturaCriancaBaixa <= alturaCriancaAlta) {
            alturaCriancaBaixa += taxaCrescCriancaBaixa
            alturaCriancaAlta += taxaCrescCriancaAlta 
        }else {
            break
        }
        i++
    }
    if (alturaCriancaBaixa > alturaCriancaAlta) {
        return console.log(`A criança mais baixa ficará maior que a mais alta em ${i} anos.`)
    }else {
        console.log('A criança mais baixa nunca será maior que a mais alta')
    }
}

calcularAlturaCriancas(110,4,120,3)