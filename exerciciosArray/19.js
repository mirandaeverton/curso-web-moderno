/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números. */

function calculaMediaSimples (array) {
    const soma = array.reduce((acumulador, atual) => acumulador + atual)
    const resultado = soma / array.length
    return resultado
}

console.log(calculaMediaSimples([1,2,3,4,5,6,7,8]))