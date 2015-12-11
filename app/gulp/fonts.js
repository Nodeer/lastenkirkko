var gulp = require('gulp');
var paths = require('./paths');

gulp.task('fonts', function() {
  return gulp
    .src(paths.fonts)
    .pipe(gulp.dest(paths.public + '/assets/fonts/'));
});
