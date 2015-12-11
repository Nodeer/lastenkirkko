var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('./paths');

gulp.task('sass', function() {
  return gulp
    .src(paths.src + '/app/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.public + '/css'));
});
