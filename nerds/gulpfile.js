'use strict';
var gulp = require('gulp'),
    jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps');


gulp.task('compileJade', function() {
	gulp.src('./*.jade')
	.pipe(jade())
	.pipe(gulp.dest('./'));
});


gulp.task('compileSass', function() {
	gulp.src("scss/style.scss")
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'));
});




gulp.task('watchSass', function() {
	gulp.watch('scss/**/*.scss', ['compileSass']); // Watch for arrays if files(['file1', 'file2']) or global pattern
});
gulp.task('watchJade', function() {
	gulp.watch('./*.jade', ['compileJade']);
});


gulp.task("build", ['watchSass', 'watchJade']);