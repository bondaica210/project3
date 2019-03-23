

var gulp = require('gulp');
var sass = require('gulp-sass');

function handleError (error) {
  console.log(error.toString())
  this.emit('end')
}

gulp.task('sass', function(){
  return gulp.src('application/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('application/css'));
});

gulp.task('watch', function(){
    gulp.
    watch('application/sass/**/*.scss', gulp.series('sass'));
});
