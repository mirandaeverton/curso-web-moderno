/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function atribuiConceitos(notas) {
    let resultado = []
    for (i in notas) {
        nota = notas[i]
        if (nota >= 0 && nota < 5) {
            resultado.push('D')
        }else if (nota >= 5 && nota < 7) {
            resultado.push('C')
        }else if (nota >= 7 && nota < 9) {
            resultado.push('B')
        }else if (nota >= 9 && nota <= 10) {
            resultado.push('A')
        }else {
            console.log(`A nota da posição ${i} é inválida.`)
        }
    }
    return resultado
}

console.log(atribuiConceitos([1.1,2.2,3.3,4.4,5.5,6.6,7.7,8.8,9.9,10,11]))