/*Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
    Plano Aumento
        A 10%
        B 15%
        C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/

function calculaAumento(salarioAtual, planoTrabalhos) {
    switch(planoTrabalhos) {
        case 'A':
            return (salarioAtual * 1.1).toFixed(2)
            break
        case 'B':
            return (salarioAtual * 1.15).toFixed(2)
            break
        case 'C':
            return (salarioAtual * 1.2).toFixed(2)
            break
        default:
            return 'Plano de trabalhos inválido.'
    }
}

console.log(calculaAumento(1200, 'A'))
console.log(calculaAumento(1500, 'B'))
console.log(calculaAumento(2200, 'C'))
console.log(calculaAumento(1200, 'D'))