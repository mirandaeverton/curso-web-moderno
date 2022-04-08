const gulp = require('gulp')
const { series, parallel } = require('gulp') // Usar mais o destructuring!!!
// const series = gulp.series // Forma mais convencional de fazer a mesma coisa

function antes1(callback) {
    console.log('Tarefa Antes 1')
    return callback()
}

function antes2(callback) {
    console.log('Tarefa Antes 2')
    return callback()
}

function copiar(callback) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo1.txt']) // Forma mais unitária
    gulp.src('pastaA/**/*.txt') // Forma mais comum e mais generalista
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))
    return callback()
}

function fim(callback) {
    console.log('Tarefa Fim')
    return callback()
}
// Criar atributo default, pois o Gulp requer a função Default para iniciar
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim) 