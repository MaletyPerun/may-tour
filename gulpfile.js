const gulp = require('gulp');
const sass = require('gulp-sass');

function style() {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
}

exports.style = style;
