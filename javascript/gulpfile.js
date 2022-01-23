const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const { series } = gulp;

function defaultFunction() {
  return gulp
    .src('src/**/*.js')
    .pipe(
      babel({
        comments: false,
        presets: ['env'],
      })
    )
    .pipe(uglify())
    .on('error', (err) => console.log(err))
    .pipe(concat('code.min.js'))
    .pipe(gulp.dest('build'));
}
function end(callback) {
  console.log(`end`);
  return callback();
}

exports.default = series(defaultFunction, end);
