const gulp = require('gulp')
const { parallel } = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const uglifyCSS = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoSASS() {
    // Como o index.scss importa todos os outros ficheiros, não é necessário referenciar os demais .scss
    return gulp.src('src/sass/index.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifyCSS({ "uglyComment": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'))
}


exports.default = parallel(transformacaoSASS, copiarHTML)