var gulp = require('gulp');
var paths = require('./paths');

gulp.task('images', function() {
  return gulp
    .src(paths.images)
    .pipe(gulp.dest(paths.public + '/assets/images/'));
});
