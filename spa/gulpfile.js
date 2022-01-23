const gulp = require('gulp');

const { appHTML, appCSS, appJs, appImg } = require('./gulpTasks/app');
const { depsCSS, depsFonts } = require('./gulpTasks/deps');
const { checkFiles, watchServer } = require('./gulpTasks/server');

const { series, parallel } = gulp;

module.exports.default = series(
  parallel(
    series(appHTML, appCSS, appJs, appImg),
    series(depsCSS, depsFonts),
    watchServer,
    checkFiles
  )
);
