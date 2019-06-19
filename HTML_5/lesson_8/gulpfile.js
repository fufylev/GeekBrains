const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

/*gulp.task('default', () => {
	const mask = './app/sass/!**!/!*.scss';
		run = () => gulp.src(mask)
			.pipe(concat('style.scss'))
			.pipe(sass())
			.pipe(gulp.dest('app'));
		
	watch(mask, run);
	return run();
});*/

gulp.task('sass', function () {
  gulp.src('app/sass/**/*.scss')
    .pipe(concat('style.scss'))
    .pipe(sass())
    .pipe(gulp.dest('app'))
});

gulp.task('myWatch', function () {
  gulp.watch(['app/sass/**/*.scss'], ['sass'])

});

gulp.task('default', ['sass', 'myWatch']);
