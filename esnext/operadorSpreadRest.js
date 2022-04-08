// rest devolve todos os parametros como um array

function soma(...numeros) {
    resultado = 0
    numeros.forEach(e => resultado += e)
    console.log(resultado)
}

soma(1, 2, 3, 4, 5)


// spread devolve todos os elementos de um array ou objeto separados

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal) 