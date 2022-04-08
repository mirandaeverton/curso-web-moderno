/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function calcularValorAnuidade(mes) {
// Valor base da anuidade = R$100    
    if(mes == 1) {
        return 100
    }else {
        // Fórmula para cálculo juros compostos P x (1 + r)t
        return (100 * (1 + 0.05) ** (mes - 1)).toFixed(2)
    }
}

console.log(calcularValorAnuidade(1))
console.log(calcularValorAnuidade(3))
