/* Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function retornaNomeDoMes(numeroDoMes) {
    let nomeDoMes
    if (numeroDoMes >= 1 && numeroDoMes <= 12) {
        switch (numeroDoMes) {
            case 1:
                nomeDoMes = 'Janeiro'
                break
            case 2:
                nomeDoMes = 'Fevereiro'
                break
            case 3:
                nomeDoMes = 'Março'
                break
            case 4:
                nomeDoMes = 'Abril'
                break
            case 5:
                nomeDoMes = 'Maio'
                break
            case 6:
                nomeDoMes = 'Junho'
                break
            case 7:
                nomeDoMes = 'Julho'
                break
            case 8:
                nomeDoMes = 'Agosto'
                break
            case 9:
                nomeDoMes = 'Setembro'
                break
            case 10:
                nomeDoMes = 'Outubro'
                break
            case 11:
                nomeDoMes = 'Novembro'
                break
            case 12:
                nomeDoMes = 'Dezembro'
                break
        }
    } else {
        nomeDoMes = 'Mês inválido.'
    }
    return nomeDoMes
}

console.log(retornaNomeDoMes(4))