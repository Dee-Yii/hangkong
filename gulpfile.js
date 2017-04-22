"use strict";
var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rjs = require('requirejs');

var path = {
    sass:["./public/sass/**/*.scss"],
    js:["./public/js/**/*.js"],
    images:['./public/images/**/*'],
    css:['./public/css/**/*'],
    lib:['./public/lib/**/*']
};

gulp.task('jade', function () {
    return gulp.src('./views/**/*.jade')
        .pipe(jade({
			pretty: true
		}))
        .pipe(gulp.dest('static/views'))
});

gulp.task('js',function  () {
    return	gulp.src(path.js)
        .pipe(uglify())
        .pipe(gulp.dest('static/js'))
});

gulp.task('images',function  () {
    return	gulp.src(path.images)
        .pipe(gulp.dest('static/images'))
});

gulp.task('lib',function  () {
    return	gulp.src(path.lib)
        .pipe(gulp.dest('static/lib'))
});

gulp.task('css',function  () {
    return	gulp.src(path.css)
        .pipe(gulp.dest('static/css'))
});

gulp.task('sass',function () {
    return 	gulp.src(path.sass)
        .pipe(sass())
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('rBuild', function () {
	rjs.optimize({
		baseUrl: "./public/js",
		mainConfigFile: "./public/js/common.js",
		optimize: "uglify2",
		dir: "./static/js",
		paths: {
			jquery: 'vendor/jquery-1.11.1.min',
			cookie: 'vendor/jquery.cookie.min',
			store: 'vendor/store',
			datetimepicker: 'vendor/jquery.datetimepicker',
			dateFunctions: 'vendor/date-functions',
			mousewheel: 'vendor/jquery.mousewheel',
			dropDown: 'vendor/jquery.dropdown',
			iCheck: 'vendor/icheck.min',
			remodal: 'vendor/remodal.min',
			validate: 'vendor/jquery.validate',
			pagination: 'vendor/jquery.pagination',
			jqForm: 'vendor/jquery.form',
			utils: 'vendor/jquery.utils',
			autoComplete: 'vendor/jquery.autocomplete',
			plupload: 'vendor/plupload.full.min',
			squire: 'vendor/squire-raw',
			squireUI: "vendor/squire-ui",
			drop: "vendor/drop",
			notie: "vendor/notie",
			wangEditor: "vendor/wangEditor.min",
			tweenMax: "vendor/tweenMax",
			cropper: "vendor/cropper.min"
		},
		shim: {
			"cookie": ["jquery"],
			"mousewheel": ["jquery"],
			"validate": ["jquery"],
			"datetimepicker": ["jquery","mousewheel","dateFunctions"],
			"dropDown": ["jquery"],
			"pagination": ["jquery"],
			"remodal": ["jquery"],
			"utils": ["jquery"],
			"jqForm": ["jquery"],
			"iCheck": ["jquery"],
			"autoComplete": ["jquery"],
			"wangEditor": ["jquery"],
			"cropper": ["jquery"]
		},

		modules: [
			//First set up the common build layer.
			{
				//module names are relative to baseUrl
				name: 'common',
				//List common dependencies here. Only need to list
				//top level dependencies, "include" will find
				//nested dependencies.
				include: ["jquery", "modules/navigation", "utils"]
			},
			{
				//module names are relative to baseUrl/paths config
				name: 'pages/index/index',
				exclude: ['common']
			}
		]
	});
});


gulp.task('compile',['sass','js','images','lib', 'css']);

gulp.task('watch',["sass"],function () {
    gulp.watch(path.sass,['sass']);
});