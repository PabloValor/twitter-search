'use strict';
var gulp		=	require('gulp');
var concat 		= 	require('gulp-concat');
var uglify 		= 	require('gulp-uglify');
var less 		= 	require('gulp-less');
var minifyCSS   = require('gulp-minify-css');
var nodemon     =   require('gulp-nodemon');
var browserSync	=	require('browser-sync').create();
var reload		=	browserSync.reload;

var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon',function(cb){
    var called = false;
    return nodemon({
        script: 'server.js',
        watch: ['server.js', 'dist/**/*.*']
    })
    .on('start', function onStart(){
        // ensure start only got called once
        if(!called) { cb(); }
        called = true;
    })
    .on('restart', function onRestart(){
        // relaod connected browsers after a slight delay
        setTimeout(function reload(){
            browserSync.reload({
                stream: false
            });
        }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function(){
    browserSync.init({
        files: ['./dist/**/*.*'],
        // informs browser-sync to proxy our expressjs app which would run at the following location
        proxy: 'http://localhost:5050',
        // informs browser-sync to use the following port for the proxied app
        // notice that the default port is 5050, which would clash with our expressjs
        port: 5000,
        browser: ['google-chrome']
    });
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src(['src/libs/**/*.js','src/js/app.js','src/js/*.js'])
    		//.pipe(uglify()) // uncomment this line for production
    		.pipe(concat('main.min.js'))
	        .pipe(gulp.dest('dist/js'));
});

// process LESS files and return the stream.
gulp.task('less', function () {
    return gulp.src(['src/css/main.less'])
            .pipe(less({compress: true}))
            .pipe(minifyCSS({keepSpecialComments: 0}))
	    	.pipe(concat('main.min.css'))
	        .pipe(gulp.dest('dist/css'));
});

gulp.watch('src/**/*.js', ['js']);
gulp.watch('src/**/*.less', ['less']);

gulp.watch('dist/**/*.*').on('change', browserSync.reload);

gulp.task('default', ['js', 'less', 'browser-sync']);
