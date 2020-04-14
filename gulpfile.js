const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const { exec } = require('child_process');

function startServer() {
  return exec('node ./server.js');
}

function watchFiles() {
  watch('./public/*.html', function(cb) {
    browserSync.reload();
    cb();
  })
}

function browserSyncInit() {
  browserSync.init({
    ui: {
      port: 3010,
    },
    port: 3030,
    proxy: "http://localhost:8080"
  });
}


exports.default = function() {
  startServer();
  browserSyncInit();
  watchFiles();
}
