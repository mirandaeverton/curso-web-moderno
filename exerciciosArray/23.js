// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
// Considere que todas as palavras só são separadas por um espaço.

const contaPalavras = string => string.split(' ').length
console.log(contaPalavras('O rato roeu a roupa do rei de roma.'))