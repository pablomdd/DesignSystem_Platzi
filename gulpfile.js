let gulp = require('gulp')
let sass = require('gulp-sass')
let minifyCSS = require('gulp-minify-css')
let concat = require('gulp-concat')

gulp.task('hello', function() {
  console.log('Hello!!!!! ')
})

gulp.task('sass', () => {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('style_min', () => {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat('style_main.min.css'))
    .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('watch', ['style_min'], () => {
  gulp.watch('scss/**/*.scss', ['style_min'])
})