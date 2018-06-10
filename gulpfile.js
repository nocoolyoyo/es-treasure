/**
 * Created by nocoolyoyo on 2018/3/12.
 */

var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("build", function () {
	return gulp.src("src/*.js")
	    .pipe(babel({
		    plugins: ['transform-runtime'],
		    presets: [
			    "es2015",
			    "stage-2"
		    ],
	    }))
	    .pipe(gulp.dest("lib"))
	    .pipe(concat("index.js"))
	    .pipe(gulp.dest("lib"));
});
