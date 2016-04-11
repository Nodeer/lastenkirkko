var gulp = require('gulp');
var paths = require('./paths');

gulp.task('sounds', function() {
  return gulp
  .src(paths.sounds)
  .pipe(gulp.dest(paths.public + '/assets/sounds/'));
});