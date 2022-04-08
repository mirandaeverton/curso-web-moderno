/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */

function encontraPalavrasSemelhantes (string, array) {
    const semelhante = e => e.includes(string)
    const resultado = array.filter(semelhante)
    return resultado
}

console.log(encontraPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(encontraPalavrasSemelhantes("python", ["javascript", "java", "c++"]))