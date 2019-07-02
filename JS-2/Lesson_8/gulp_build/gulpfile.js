// Для запуска необходимо выполнить команды в терминале
// npm i
// gulp

// Все компоненты, которые необходимы gulp
let gulp = require('gulp'), // Сам gulp
    sass = require('gulp-sass'), // Компиляция стилей
    minifyJs = require('gulp-terser'), // Минификация js
    autoPrefixer = require('gulp-autoprefixer'), // Вендорные префиксы
    bs = require('browser-sync'), // Server
    htmlMin = require('gulp-htmlmin'), // Минификация html
    rename = require('gulp-rename'), //Rename
    delFiles = require('del'), // Delete files
    cssMinify = require('gulp-csso'), // Minify css
    babel = require('gulp-babel'), // babel
    pug = require('gulp-pug'); // pug


// Gulp methods
// gulp.task() - создать новую задачу
// gulp.src() - выбор файлов
// gulp.dest() - сохранение/перенос файлов
// gulp.series() - задачи запускаются по порядку
// gulp.parallel() - задачи запускаются параллельно
// gulp.watch() - следит за файлами

// Просто пример создания тестовой задачи
// Все действия - асинхронные задачи,
// возвращающие promise
// Поэтому return обязателен
gulp.task('test', () => {
   return console.log('gulp works');
});

// Сборка html
// pipe() выступает асинхронным обработчиком - как then
// то есть выбрали файлы, как только файлы получены,
// выполняем pipe, после него выполняем еще одно действие и т.д
gulp.task('html', () => {
   return gulp.src('app/html/index.html') // Выбор файла
       .pipe(htmlMin({
           collapseWhitespace: true // Использование минификации
       }))
       .pipe(gulp.dest('dist'));
});

// Стили
gulp.task('sass', () => {
    // Примеры шаблонов выбора файлов
    // ** - все подпаки
    // *.scss - любой файл с расширением scss
    // return gulp.src('app/sass/**/*.scss')
    // return gulp.src('app/sass/**/*.+(scss|sass)')
    // return gulp.src(['app/img/**/*.+(jpg|png|gif|svg)', 'app/content/*.jpg'])
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssMinify())
        .pipe(gulp.dest('dist/css'))
});
// Очистка перед сборкой
gulp.task('clean', () => {
    return delFiles('dist');
});
// Сборка pug шаблона
gulp.task('pug', () => {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist/templates'))
});

// Минификация js
gulp.task('js:es6', () => {
    return gulp.src('app/js/**/*.js')
        .pipe(minifyJs())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/js'))
});
// Компиляция es6+ в es5
gulp.task('js:babel', () => {
    return gulp.src('app/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({
            suffix: '.es5'
        }))
        .pipe(gulp.dest('dist/js'))
});
// Поднимаем сервер для разработки
gulp.task('server', () => {
    return bs({
        server: {
            baseDir: 'dist'
        },
        // название браузера специфично для системы
        browser: 'google chrome canary'
    })
});
// Вотчеры позволяют следить за изменениями
// в исходных файлах, как только они появятся - выполняем задачи
gulp.task('sass:watch', () => {
    return gulp.watch('app/sass/**/*.scss', gulp.series('sass', (done) => {
        bs.reload();
        done()
    }))
});
gulp.task('js:watch', () => {
    return gulp.watch('app/js/**/*.js', gulp.series('js:es6', (done) => {
        bs.reload();
        done()
    }))
});


// Задача по умолчанию, которая вызывается в терминале командой gulp
// Содержит все задачи в определенной последовательности
gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('sass', 'html', 'pug', 'js:es6', 'js:babel'),
    gulp.parallel('sass:watch', 'js:watch','server')
));



















