var gulp = require('gulp');
var rt = require('gulp-react-templates');

gulp.task('rt', function() {
  gulp.src('./templates/show.rt')
    .pipe(rt({modules: 'none'}))
    .pipe(gulp.dest('./templates'));
});