/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"} */

function inverteObjeto (objeto) {
    const resultado = {}
    Object.entries(objeto).map(e => resultado[e[1]] = e[0])
    return resultado
}

console.log(inverteObjeto({ 1: "a", 2: "b", 3: "c"}))
console.log(inverteObjeto({nome: 'Rebeca', idade: 2, peso: 13}))
console.log(inverteObjeto({modelo: 'A4', valor: 89000, proprietario:'Raul'}))