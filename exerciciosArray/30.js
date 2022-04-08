/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. */


function receberMelhorEstudante(estudantes) {
    const soma = (acumulador, atual) => acumulador + atual
    let melhorMedia = 0
    let nomeMelhorAluno
    Object.entries(estudantes).forEach(e => {
        let media = e[1].reduce(soma) / e[1].length
        if (media > melhorMedia) {
            melhorMedia = media
            nomeMelhorAluno = e[0]
        }
    })
    return { [nomeMelhorAluno]: melhorMedia }
}

console.log(receberMelhorEstudante({ Joao: [8, 7.6, 8.9, 6], Mariana: [9, 6.6, 7.9, 8], Carla: [7, 7, 8, 9]}))
