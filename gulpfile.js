'use strict';
var gulp = require('gulp'),
    mocha = require('gulp-mocha');

var paths = {
    scripts: ['./*.js', '!./gulpfile.js']
};
gulp.task('test', function () {
    return gulp.src('./test/*.js')
        .pipe(mocha({reporter: 'dot'}));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['lint', 'jscs', 'test']);
});

gulp.task('default', ['lint', 'jscs', 'test', 'watch']);
