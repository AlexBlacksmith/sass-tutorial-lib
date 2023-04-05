const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileStyles() {
    return src('lib/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchStyles() {
    watch(['lib/**/*.scss'], compileStyles);
}

exports.default = series(watchStyles);