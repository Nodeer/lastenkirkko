var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');

gulp.task('build:dev', function() {
  return runSequence('constant:dev', 'common');
});

gulp.task('build:stage', function() {
  return runSequence('constant:stage', 'common');
});

gulp.task('build:prod', function() {
  return runSequence('constant:prod', 'common', 'optimize');
});
