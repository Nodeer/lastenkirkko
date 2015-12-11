var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var paths = require('./paths');

gulp.task('optimize', [
  'optimize:js',
  'optimize:css'
]);

gulp.task('optimize:js', function() {
  return gulp
    .src(paths.public + '/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(paths.public + '/js'));
});

gulp.task('optimize:css', function() {
  return gulp
    .src(paths.public + '/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.public + '/css'));
});
