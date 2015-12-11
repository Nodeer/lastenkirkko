require('dotenv').load();

var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');
var paths = require('./paths');

gulp.task('constant:dev', function() {
  return compileConstants('dev');
});

gulp.task('constant:stage', function() {
  return compileConstants('stage');
});

gulp.task('constant:prod', function() {
  return compileConstants('prod');
});

/**
 * Compiles constants declared in src/app/constants.json.
 * @param {string} environment (dev|stage|prod)
 */
function compileConstants(environment) {
  var file = require(paths.src + '/app/constants.json');

  // Use mock API in dev
  if (typeof process.env.API_DEV !== 'undefined' && process.env.API_DEV === 'mock') {
    file.dev.API_URL = 'http://localhost:1337';
  }

  return ngConstant({
    name: 'lastenkirkko',
    constants: file[environment],
    deps: false,
    stream: true
  })
  .pipe(gulp.dest(paths.src + '/app/config'));
}
