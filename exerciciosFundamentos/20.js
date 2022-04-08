/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function calcularQuantidadeNotas(valor) {
    const notas = [100, 50, 10, 5, 1]
    var contadorNotas = []
    let quantidadeNotas = ''
    for (let i in notas) {
        if (valor > notas[i]) {
            quantidadeNotas = quantidadeNotas + `${Math.floor(valor / notas[i])} nota(s) de R$${notas[i]}. `
            contadorNotas.push(Math.floor(valor / notas[i]))
            valor = valor % notas[i]
        }
    }
    console.log(quantidadeNotas)
    return contadorNotas
}

calcularNotas(1050)
calcularNotas(2453)
calcularNotas(77)
calcularNotas(139)
calcularNotas(432)
calcularNotas(153)