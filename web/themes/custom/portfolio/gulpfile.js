let gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  path = require('path')
//browserSync = require('browser-sync').create()

const sass = require('gulp-sass')(require('sass'));

const paths = {
  component: {
    src: './scss/component/**/*.scss',
    dest: './css',
    watch: './scss/component/**/*.scss',
  },
  navigation: {
    src: './scss/navigation.scss',
    dest: './css',
    watch: './scss/navigation/**/*.scss',
  },
  paragraph: {
    src: './scss/paragraph.scss',
    dest: './css',
    watch: './scss/paragraph/**/*.scss',
  },
  view_modes: {
    src: './scss/view-modes.scss',
    dest: './css',
    watch: './scss/view-modes/**/*.scss',
  },
  js: {
    bootstrap: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    jquery: './node_modules/jquery/dist/jquery.min.js',
    dest: './js'
  }
}

// Compile sass into CSS & auto-inject into browsers
function styles () {
  return gulp.src([paths.component.src, paths.navigation.src, paths.paragraph.src, paths.view_modes.src], {base:''})
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({
      overrideBrowserslist: [
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 10',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12']
    })]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.component.dest, paths.navigation.dest, paths.paragraph.dest, paths.view_modes.dest))
    .pipe(cleanCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.component.dest, paths.navigation.dest, paths.paragraph.dest, paths.view_modes.dest))
    //.pipe(browserSync.stream())
}

// Move the javascript files into our js folder
function js () {
  return gulp.src([paths.js.bootstrap, paths.js.jquery])
    .pipe(gulp.dest(paths.js.dest))
    //.pipe(browserSync.stream())
}

// Static Server + watching scss/html files
function serve () {
    /*
    Disabled browserSync because of Docker/VM
    browserSync.init({
      proxy: 'http://yourdomain.com',
    })*/

    // See https://stackoverflow.com/questions/28681491/within-docker-vm-gulp-watch-seems-to-not-work-well-on-volumes-hosted-from-the-h

    gulp.watch([paths.component.watch, paths.navigation.watch, paths.paragraph.src, paths.view_modes.src], {interval: 1000, usePolling: true}, gulp.series(styles));
}


const watch = gulp.series(styles, gulp.parallel(js, serve))
const build = gulp.series(styles, js)

exports.css = styles;
exports.styles = styles;
exports.js = js;
exports.serve = serve;
exports.build = build;

exports.default = watch;
