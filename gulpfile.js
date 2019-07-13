var gulp =  require('gulp');
var sass =  require('gulp-sass');

//npm install gulp --save --only=dev
gulp.task('hello', function() {
    console.log('Hello ');
});
  
//npm install gulp-sass
  
gulp.task('sass', function(){
return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets'))
});
  