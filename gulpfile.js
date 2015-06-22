/**
 * For more information see this tutorial: http://blog.webbb.be/use-jekyll-with-gulp/
 * 
 * Libs import
 * --> How to install? npm install --save-dev gulp-minify-html
 * @type {[type]}
 */
var gulp = require('gulp'),
    path = require('path'),

    // CSS
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css'),

    // JS BUILD
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),

    // HTML
    htmlmin = require('gulp-htmlmin'),

    // Browser sync
    browserSync = require('browser-sync'),

    // Import files
    pkg = require('./package.json')

;


var dist              = '_source/'
    , dirPublic       = '/'
    , distAssets      = dist + dirPublic + 'assets/'
    , distStylesheets = distAssets + 'styles/'
    , distJavascripts = distAssets + 'scripts/'
    , distImages      = distAssets + 'images/'

    , deploy          = '_deploy/'

    , src = ''
    , srcStylesheets = src + 'styles/'
    , srcJavascripts = src + 'scripts/'
    , srcTemplates   = src + 'templates/'
;

// -->
// Compass & SASS
// <--
gulp.task('compass', function() {
    gulp.src(srcStylesheets + '*.scss')
        /*.pipe(compass({
            css: distStylesheets,
            sass: srcStylesheets,
            image: distImages,
            logging: true,
            style: 'compressed'
        }))
            .on('error', function(err) {
                // Would like to catch the error here
                console.log('Compass error')
                console.log(err);
            })*/
        .pipe(minifyCSS({keepBreaks: false, keepSpecialComments:true}))
        .pipe(gulp.dest(distStylesheets));
});

// -->
// HTML
// <--
gulp.task('html', ['jekyll'], function() {
    // --> Minhtml
    gulp.src([
        path.join(deploy, '*.html'),
        path.join(deploy, '*/*/*.html'),
        path.join(deploy, '*/*/*/*.html')
    ])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(deploy))
        .pipe(browserSync.reload({stream:true, once: true}));
});

// -->
// Browser Sync
// <--
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./" + deploy
        }
    });
});
// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// -->
// js
// Concatenate & JS build
// <--
gulp.task('js', function () {
    gulp.src([srcJavascripts + 'plugins.js', srcJavascripts + 'main.js'])
        .pipe(concat(pkg.name + '.js'))
        .pipe(gulp.dest(distJavascripts))
        .pipe(rename(pkg.name + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(distJavascripts));
});

// -->
// Default task
// <--
gulp.task('jekyll', ['js', 'compass'], function (gulpCallBack){
    var spawn = require('child_process').spawn;
    // After build: cleanup HTML
    var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});

// -->
// Default task
// <--
gulp.task('default', ['compass', 'js', 'html', 'browser-sync'], function (event) {
    // --> CSS
    gulp.watch(srcStylesheets+"**", ['html']);
    // --> HTML
    gulp.watch([
        path.join(dist, '*.html'),
        path.join(dist, '*/*.html'),
        path.join(dist, '*/*.md')
    ], ['html']);
    // --> Ruby
    gulp.watch(path.join(dist, '*/*.rb'), ['html']);
    // --> JS
    gulp.watch(srcJavascripts+"*.js", ['html']);

});