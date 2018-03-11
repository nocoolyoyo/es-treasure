/**
 * Created by nocoolyoyo on 2018/3/12.
 */

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("build", function () {
	return gulp.src("src/*.js")
	    .pipe(babel())
	    .pipe(gulp.dest("lib"))
	    .pipe(concat("index.js"))
	    .pipe(gulp.dest("lib"));
});
