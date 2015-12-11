var gulp = require('gulp');
var ngTemplates = require('gulp-ng-templates');
var paths = require('./paths');
var appName = 'lastenkirkko';

gulp.task('templates', function() {
  return gulp
    .src(paths.templates)
    .pipe(ngTemplates({
      filename: 'templates.js',
      module: appName + '.templates'
    }))
    .pipe(gulp.dest(paths.public + '/js/'));
});
