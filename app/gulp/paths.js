var path = require('path');
var mainBowerFiles = require('main-bower-files');
var rootPath = path.resolve(__dirname) + '/../';

/**
 * Returns a relative inclusion path.
 * @param {string} path
 */
function include(path) {
  return rootPath + path;
}

/**
 * Returns a relative exclusion path.
 * @param {string}
 */
function exclude(path) {
  return '!' + rootPath + path;
}

module.exports = {
  root: rootPath,
  src: include('src'),
  app: [
    include('src/app/app.js'),
    include('src/app/**/*.js'),
    exclude('src/app/common/spec/**/*'), // ignore test helper files
    exclude('**/*-spec.js') // ignore test files
  ],
  fonts: [
    include('src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2,otf}')
  ],
  html: [
    include('src/app/index.html')
  ],
  templates: [
    exclude('src/app/index.html'),
    include('src/app/**/*.html')
  ],
  images: [
    include('src/assets/images/**/*.{gif,jpg,png}')
  ],
  sounds: [
    include('src/assets/sounds/**/*.{wav,mp3}')
  ],
  sass: [
    include('src/**/*.scss')
  ],
  vendor: mainBowerFiles({filter: /.*\.js/}),
  releases: include('releases'),
  public: include('public')
};
