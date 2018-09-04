var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
	nodemon 	  = require('gulp-nodemon'),
	uglify = require('gulp-uglify-es').default,
	concat = require('gulp-concat'),
	pump = require('pump');
	image = require('gulp-image');



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
		if (!started) {
			cb();
			started = true; 
		} 
	});
});


gulp.task('js', function (cb) {
	pump([
		  gulp.src('src/js/*.js'),
		  uglify(),
		  gulp.dest('dist/js')
	  ],
	  cb
	);
  });
  gulp.task('css', function() {
	gulp.src('src/css/*.css')
	.pipe(gulp.dest('dist/css'))
  });
  gulp.task('html', function() {
	gulp.src('src/views/**/*.html')
	.pipe(gulp.dest('dist'))
  });
  gulp.task('images', function () {
	gulp.src('src/images/*')
	  .pipe(image())
	  .pipe(gulp.dest('dist/images'));
  });

gulp.task('build', ['js','css','html', 'images'])

gulp.task('default', ['serve', 'nodemon']);