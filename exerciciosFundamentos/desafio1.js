/* Desenvolva m pequeno programa qeu consiga, ao receber o resultado de um conjunto de disputas
de pedra, papel e tesoura entre dois jogadores, saber qual deles venceu mais partidas */

function pedraPapelETesoura(jogador1, jogador2) {
    let vitoriasJogador1 = 0
    let vitoriasJogador2 = 0
    const [...jogadas] = jogador1 + jogador2
    
    if (jogadas.length != jogadas.filter(verificaJogada).length) {
        return 'Jogadas inválidas. Por favor, informe novamente.' 
    }
 

    if (jogador1.length != jogador2.length) return 'Jogadas inválidas. Por favor, informe novamente.'    
    
    for (let i = 0; i < jogador1.length; i++) {
        let jogada = jogador1.charAt(i) + jogador2.charAt(i)
        switch (jogada) {
            case 'SP':
            case 'RS':
            case 'PR':
                vitoriasJogador1++
                break
            case 'PS':
            case 'SP':
            case 'RP':
                vitoriasJogador2++
        }
    }; 

    if (vitoriasJogador1 > vitoriasJogador2) {
        return `O Jogador 1 ganhou a disputa por ${vitoriasJogador1} a ${vitoriasJogador2}.`
    } else if (vitoriasJogador1 < vitoriasJogador2) {
        return `O Jogador 2 ganhou a disputa por ${vitoriasJogador2} a ${vitoriasJogador1}.`
    } else {
        return 'O jogo empatou.'
    }
}

function verificaJogada(jogada) {
    const regex = /[RSP]/i
    return regex.test(jogada)
}

console.log(pedraPapelETesoura('SRRSPRRPRSRARS', 'RSSSRPPRSPSRRS'))