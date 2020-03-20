const {series, src, dest, watch} = require('gulp');
const concat = require('gulp-concat');
const babel = require("gulp-babel");
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function defaultTask(cb) {
  console.log('gulp');
  cb();
}

function html() {
  console.log('bulding html');
  return src('src/index.html')
          .pipe(dest('./dist'));
}

function vendorsJs(){
  return src([
              './node_modules/jquery/dist/jquery.js'
            ])
          .pipe(concat('vendors.js'))
          .pipe(dest('./dist'));
}

function scripts() {
  console.log('bulding scripts');
  return src('./src/**/*.js')
          .pipe(babel())
          .pipe(concat('all.js'))
          .pipe(dest('./dist'));
}

function styles() {
  console.log('bulding styles');
  return src('./src/styles.sass')
          .pipe(sass())
          .pipe(dest('./dist'));
}

function watchFiles() {
  watch('./src/**/*.js', scripts);
  watch('./src/**/*.sass', styles);
}

function serve(){
  browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    watch('./src/**/*.js',series(scripts, browserSync.reload));
    watch('./src/**/*.sass',series(styles, browserSync.reload));
}

const build = series(html, scripts, styles, vendorsJs);

module.exports = {
  default:defaultTask,
  build:build,
  dev:series(build, watchFiles),
  serve:series(build,serve)
};
