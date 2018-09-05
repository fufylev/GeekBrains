let gulp = require('gulp'),
  htmlMin = require('gulp-htmlmin'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  cssMin = require('gulp-csso'),
  imgMin = require('gulp-imagemin'),
  uglify = require('gulp-uglify'),
  BS = require('browser-sync'),
  concat = require('gulp-concat'),
  babel = require("gulp-babel");
;

gulp.task('test', function () {
  console.log('Gulp works!');
});

gulp.task('default', ['test', 'html', 'js', 'js_1', 'js_2', 'sass', 'myWatch'], function () {
  console.log('Default task!');
});

gulp.task('html', function () {
  gulp.src('app/**/*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
    .pipe(BS.reload({stream: true}));
});

gulp.task('js', function () {
  return gulp.src('app/js/goods_basket/*.js')
    .pipe(babel({
      "presets": ["env"]
    }))
    .pipe(uglify())
    /*.pipe(rename({suffix: '.min'}))*/
    .pipe(gulp.dest('build/js/goods_basket'))
});
gulp.task('js_1', function () {
  return gulp.src('app/js/reviews/*.js')
    .pipe(babel({
      "presets": ["env"]
    }))
    .pipe(uglify())
    /*.pipe(rename({suffix: '.min'}))*/
    .pipe(gulp.dest('build/js/reviews'))
});
gulp.task('js_2', function () {
  return gulp.src('app/js/sliders/*.js')
    .pipe(babel({
      "presets": ["env"]
    }))
    .pipe(uglify())
    /*.pipe(rename({suffix: '.min'}))*/
    .pipe(gulp.dest('build/js/sliders'))
});
gulp.task('sass', function () {
  gulp.src('app/sass/**/*.scss')
    .pipe(concat('style.scss'))
    .pipe(sass())
    .pipe(gulp.dest('app'))
    .pipe(gulp.dest('build'))
    .pipe(cssMin())
    /*.pipe(rename({suffix: '.min'}))*/
    .pipe(gulp.dest('build'))
    .pipe(BS.reload({stream: true}));
});

gulp.task('img', function () {
  gulp.src('app/img/*.*')
    .pipe(imgMin())
    .pipe(gulp.dest('build/img'));
});

gulp.task('myWatch', function () {
  /*gulp.watch(['app/!*.html'], ['html']);
  gulp.watch('app/js/!**!/!*.js', ['js']);*/
  gulp.watch('app/sass/**/*.scss', ['sass']);
});

gulp.task('server', function () {
  BS({
    server: {
      baseDir: 'app'
    }
  });
});