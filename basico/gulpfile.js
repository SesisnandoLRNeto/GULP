const gulp = require('gulp');
const { series, parallel } = gulp;

const before = (cb) => {
  console.log(`task 1`);
  return cb();
};

const middle = (cb) => {
  console.log(`task 2`);
  return cb();
};

function copy(cb) {
  console.log(`copy`);
  gulp
    .src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest('folderB'));
  return cb();
}

module.exports.default = series(parallel(before, middle), copy);
