const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

const checkFiles = () => {
  return gulp.src('build').pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  );
};

const watchServer = (callback) => {
  watch('src/**/*.html', () => gulp.series('appHTML')());
  return callback();
};

module.exports = {
  checkFiles,
  watchServer,
};
