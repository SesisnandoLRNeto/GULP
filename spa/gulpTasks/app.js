const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

const appHTML = () => {
  return gulp
    .src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
};
const appCSS = () => {
  return gulp
    .src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css'));
};
const appJs = () => {
  return gulp
    .src('src/assets/js/**/*.js')
    .pipe(
      babel({
        comments: false,
        presets: ['env'],
      })
    )
    .pipe(uglify())
    .on('error', (err) => console.log(err))
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'));
};
const appImg = () => {
  return gulp
    .src('src/assets/imgs/**/*.*')
    .pipe(gulp.dest('build/assets/imgs'));
};

module.exports = { appHTML, appCSS, appJs, appImg };
