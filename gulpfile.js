/*
 * @Author: 翟勋 
 * @Date: 2018-12-02 09:34:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-02 09:56:49
 */

var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("ESass", function() {
    return gulp.src("./dev/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dev/css"))
});
gulp.task("watch", function() {
    return gulp.watch("./dev/scss/*.scss", gulp.series("ESass"))
});