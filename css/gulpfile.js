const gulp = require('gulp');
const uglifycss = require('gulp-uglifycss');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const { series } = gulp;

const convertCss = () => {
  return gulp
    .src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'));
};

const copyHTML = () => {
  return gulp.src('src/index.html').pipe(gulp.dest('build'));
};

exports.default = series(convertCss, copyHTML);
