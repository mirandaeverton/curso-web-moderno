/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function comparaStrings(string1, string2) {
    string1 = string1.toLocaleUpperCase()
    string2 = string2.toLocaleUpperCase()
    if (string1.length != string2.length) {
        return 'As duas strings tem comprimentos diferentes.'
    }else {
        for (i in string1) {
            if (!string2.includes(string1[i])) {
                return `Caracter "${string1[i]}" não encontrado na segunda string`
            }
        }
        return `Todos os caracteres estão em ambas as strings`
    }
}

console.log(comparaStrings('1234acb','4321bca'))