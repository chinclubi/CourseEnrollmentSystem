var gulp = require('gulp')
var libsass = require('gulp-sass')
var prefix = require('gulp-autoprefixer')
var minifycss = require('gulp-minify-css')
var wait = require('gulp-wait')
var dest = require('gulp-dest')

gulp.task('style', function () {
  return gulp.src([
    './app/**/*.scss'
  ])
    .pipe(wait(1000))
    .pipe(libsass())
    .pipe(prefix('last 1 version', '> 1%', 'ie 10', 'ie 11', 'iOS 6', 'iOS 7', 'Android 4', {
      cascade: true
    }))
    .pipe(minifycss({keepSpecialComments: 0}))
    .pipe(dest('build/styles/:name.css'))
    .pipe(gulp.dest('build'))
})
