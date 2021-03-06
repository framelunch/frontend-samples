const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const customProperties = require('postcss-custom-properties');
const nested = require('postcss-nested');
const importCss = require('postcss-import');
const customMedia = require('postcss-custom-media');
const cssFixes = require('postcss-fixes');
const url = require('postcss-url');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browser = require('browser-sync');

const conf = require('../config');

gulp.task('style', () => (
  gulp.src(conf.style.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss([
      importCss,
      customProperties,
      customMedia,
      nested,
      cssFixes,
      url(conf.style.urlOption),
      autoprefixer(conf.style.autoprefixerOption)
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${conf.dest.dev}/css`))
    .pipe(browser.reload({ stream: true }))
));

gulp.task('b.style', () => (
  gulp.src(conf.style.src)
    .pipe(postcss([
      importCss,
      customProperties,
      customMedia,
      nested,
      cssFixes,
      autoprefixer(conf.style.autoprefixerOption),
      cssnano,
    ]))
    .pipe(gulp.dest(`${conf.dest.build}/css`))
));
