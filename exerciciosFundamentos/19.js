/* O cardápio de uma lanchonete é o seguinte:
    Código      Descrição do Produto        Preço
    100         Cachorro Quente             R$ 3,00
    200         Hambúrguer Simples          R$ 4,00
    300         Cheeseburguer               R$ 5,50
    400         Bauru                       R$ 7,50
    500         Refrigerante                R$ 3,50
    600         Suco                        R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function valorPedido(codigoItem, quantidade) {
    switch(codigoItem) {
        case 100:
            console.log(`O valor final é R$${(quantidade * 3).toFixed(2).toString().replace('.',',')}`)
            break
        case 200:
            console.log(`O valor final é R$${(quantidade * 3).toFixed(2).toString().replace('.',',')}`)
            break
        case 300:
            console.log(`O valor final é R$${(quantidade * 3).toFixed(2).toString().replace('.',',')}`)
            break
        case 400:
            console.log(`O valor final é R$${(quantidade * 3).toFixed(2).toString().replace('.',',')}`)
            break
        case 500:
            console.log(`O valor final é R$${(quantidade * 3).toFixed(2).toString().replace('.',',')}`)
            break
        case 600:
            console.log(`O valor final é R$${(quantidade * 3).toFixed(2).toString().replace('.',',')}`)
            break
        default:
            console.log('Código inválido.')
        }
}

valorPedido(100, 3)
valorPedido(200, 9)
valorPedido(500, 32)
valorPedido(400, 25)
valorPedido(300, 8)
valorPedido(600, 10)
valorPedido(60, 10)
