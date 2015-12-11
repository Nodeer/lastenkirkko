/* global process */

var gulp = require('gulp');
var zip = require('gulp-zip');
var aws = require('gulp-aws');
var paths = require('./paths');

var CLIENT_STAGING_FILE = "client-staging-latest.zip";
var CLIENT_PRODUCTION_FILE = "client-production-latest.zip";

var gulpZip = function(targetFile) {
  return gulp
    .src(paths.public + '/**/*')
    .pipe(zip(targetFile))
    .pipe(gulp.dest(paths.releases));
};

var gulpUpload = function(zipFile) {
  return gulp
    .src(paths.releases + '/' + zipFile, {buffer: false})
    .pipe(aws.s3(process.env.S3_BUCKET, {
      aws_key: process.env.S3_ACCESS_KEY,
      aws_secret: process.env.S3_SECRET,
      aws_region: process.env.S3_REGION,
      aws_cli_path: process.env.AWS_CLI_PATH,
      prefix_path: process.env.S3_PREFIX_PATH
    }));
};

gulp.task('zip:stage', function() {
  return gulpZip(CLIENT_STAGING_FILE);
});

gulp.task('zip:prod', function() {
  return gulpZip(CLIENT_PRODUCTION_FILE);
});

gulp.task('upload:stage', function() {
  return gulpUpload(CLIENT_STAGING_FILE);
});

gulp.task('upload:prod', function() {
  return gulpUpload(CLIENT_PRODUCTION_FILE);
});
