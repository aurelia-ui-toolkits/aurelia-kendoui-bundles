var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.js');
var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var config = {
  force: true,
  configPath: "config.js",
  injectionConfigPath: "config.js",
  packagePath: '.',
  bundles: bundles.bundles
};


// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src(['./bundles/bundle.js'])
    .pipe(vinylPaths(del));
});

gulp.task('unbundle', gulp.series('clean', function() {
  return bundler.unbundle(config);
}));
gulp.task('bundle', gulp.series('unbundle', function() {
  return bundler.bundle(config);
}));
