/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function verificaDia(dia) {
    switch(dia) {
        case 1:
            console.log('Este dia é fim de semana.')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Este é um dia útil.')
            break
        case 7:
            console.log('Este dia é fim de semana.')
            break
        default:
            console.log('Dia inválido.')
    }
}

verificaDia(5)
verificaDia(8)
verificaDia(1)