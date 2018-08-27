var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
    nodemon 	  = require('gulp-nodemon');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["./**/*.*"],
        browser: "google chrome",
        port: 5000,
	});

    gulp.watch("./src/sass/*.scss", ['sass']);
    gulp.watch("./src/sass/pages/*.scss", ['sass']);
    gulp.watch("./src/views/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/sass/main.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'index.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('default', ['serve', 'nodemon']);