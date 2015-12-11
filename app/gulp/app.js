var gulp = require('gulp');
var paths = require('./paths');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('app', function() {
  return gulp
    .src(paths.app)
    .pipe(concat('app.js'))
    .pipe(ngAnnotate({
      single_quotes: true
    }))
    .pipe(gulp.dest(paths.public + '/js/'));
});
