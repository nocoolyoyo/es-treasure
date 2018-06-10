/**
 * Created by nocoolyoyo on 2018/3/12.
 */

const gulp = require("gulp")
const babel = require("gulp-babel")

gulp.task("umd", function () {
	return gulp.src("src/*.js")
		.pipe(babel({
			plugins: ['transform-runtime', 'add-module-exports', 'transform-es2015-modules-umd'],
			presets: [
				"es2015",
				"stage-2"
			],
		}))
		.pipe(gulp.dest("lib/umd"))
		// .pipe(concat("index.js"))
		// .pipe(gulp.dest("lib"));
})

gulp.task("commonjs", function () {
	return gulp.src("src/*.js")
	    .pipe(babel({
		    plugins: ['transform-runtime', 'transform-es2015-modules-commonjs'],
		    presets: [
			    "es2015",
			    "stage-2"
		    ],
	    }))
	    .pipe(gulp.dest("lib"))
})

gulp.task('build', ['commonjs', 'umd']);