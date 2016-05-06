var gulp = require('gulp')
var watch = require('gulp-watch')
var del = require('del')

var requireDir = require('require-dir')
requireDir('./gulp-tasks')

gulp.task('default', [], function () {
  gulp.run(['html'])
})

gulp.task('watch', [], function () {
  watch('./app/**/*.jade', function () {
    gulp.run(['html'])
  })
})

gulp.task('clean', function (cb) {
  del(['build/*', cb])
})

gulp.task('compile', ['html'])
