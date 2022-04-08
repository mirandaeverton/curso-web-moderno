// Criar uma função factory com parâmetros para criação de produtos

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("monitor", 399))