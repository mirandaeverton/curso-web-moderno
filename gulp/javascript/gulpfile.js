const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(callback) {
    // gulp.src(['src/calculadora.js', '/src/testeCalculadora.js'])
    gulp.src('src/**/*.js')
    .pipe(babel())
        /* Estes parâmetros são diferentes na versão atual
        babel({
            comments: false,
            presets: ["env"]
        })
        */
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    return callback()
}

exports.default = series(padrao)