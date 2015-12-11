var gulp = require('gulp');
var paths = require('./paths');

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build:dev']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.vendor, ['vendor']);
});
