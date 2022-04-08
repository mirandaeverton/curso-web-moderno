/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function calculoJuroSimples(capInicial, juros, tempoAplicacao){
    return capInicial * ( 1 + juros * tempoAplicacao)
}

console.log(calculoJuroSimples(1000,0.1,5))

function calculoJuroComposto(capInicial, juros, tempoAplicacao){
// P x (1 + r)t
    return capInicial * (1 + juros)**tempoAplicacao
}

console.log(calculoJuroComposto(1000, 0.1, 5).toFixed(2))