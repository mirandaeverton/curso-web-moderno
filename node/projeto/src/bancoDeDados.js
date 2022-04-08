const sequence = {
    _id: 1,
    get id() { return this._id++ } // Função para retornar um ID incremental. 
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // If reduzido
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id] // Somente para retornar o produto excluído, como feedback
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }