
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require ('gulp-clean-css');
const uglify = require ('gulp-uglify');
const rename = require('gulp-rename');



gulp.task('sassToCSS', function() {
    return gulp.src('css/*.sass')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 50 versions'],
            cascade: false}))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/'));
});


gulp.task('watchFiles', function() {
    gulp.watch('css/*.sass', gulp.series('sassToCSS'));
});


gulp.task('default', gulp.parallel('watchFiles'));

