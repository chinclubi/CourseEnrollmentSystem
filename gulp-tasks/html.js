var gulp = require('gulp')
var gulp = require('gulp')
var jade = require('gulp-jade')
var dest = require('gulp-dest')

gulp.task('html', function () {
  return gulp.src(['./app/**/*.jade'])
    .pipe(jade())
    .pipe(dest('build/views/:name.html'))
    .pipe(gulp.dest('build'))
})
