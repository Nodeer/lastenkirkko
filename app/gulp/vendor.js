var gulp = require('gulp');
var concat = require('gulp-concat');
var paths = require('./paths');

gulp.task('vendor', function() {
  return gulp
    .src(paths.vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(paths.public + '/js/'));
});
