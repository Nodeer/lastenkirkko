var gulp = require('gulp');
var paths = require('./paths');

gulp.task('data', function() {
  return gulp
    .src(paths.data)
    .pipe(gulp.dest(paths.public + '/assets/data/'));
});