var path = require('path');

var browserify = require('browserify');
var clean = require("gulp-clean");
var concat = require('gulp-concat');
var express = require('express');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var livereloadInjector = require('connect-livereload');
var minifyHTML = require('gulp-minify-html');
var runSequence = require('run-sequence');
var sourceStream = require('vinyl-source-stream');
var templateCache = require('gulp-angular-templatecache');
var ts = require('gulp-typescript');
var util = require('gulp-util');
var watchify = require('watchify');
var stylus = require('gulp-stylus');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var replace = require('gulp-replace');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var _ = require('lodash');

var appIndexHtmlFilename = 'index.html';
var appProjectName = 'stencil';
var compiledAngularTemplateCacheFilename = 'templates.js';
var compiledCssFilename =  appProjectName + '.compiled.css';
var compiledJsFilename = appProjectName + '.compiled.js';

var webServerPort = 3000;
var proxyServerPort = 3001;
var isWatchAndRun = false;
var isPackageRun = false;
var isPackageRelease = false;

var sources = {
    ts: 'app/**/*.ts',
    build: './build/app',
    dist: './dist/app',
    zip: './dist',
    html: 'app/' + appIndexHtmlFilename,
    templates: [
        'app/**/*.html',
        '!app/assets/**/*.html',
        '!app/' + appIndexHtmlFilename
    ],
    assets: [
        'app/assets/**/*.*'
    ],
    stylus: [
        'app/**/*.styl',
        'app/**/*.css'
    ]
};

/***********************************************************************************************************************
 * Local functions / Utilities
 **********************************************************************************************************************/

gulp.task('clean', function() {
    return gulp.src([sources.build, sources.dist], {read: false})
    .pipe(clean());
});

gulp.task('start-server', function() {
    var server = express();

    server.get('/', function(request, response) {
        response.sendFile(path.join(__dirname, '/app','/index.html'));
    })
    .use(express.static(path.resolve(__dirname)))
    .listen(proxyServerPort);

    util.log('proxy server listening on port ' + proxyServerPort);
});

gulp.task('webpack-dev-server', function() {
    var options = require('./webpack.config');

    options.entry = [];
    options.entry.push('app/' + appProjectName + '.ts');
    options.entry.push('webpack-dev-server/client?http://localhost:' + webServerPort, 'webpack/hot/dev-server');
    options.plugins.push(new webpack.HotModuleReplacementPlugin());

    var devServerOptions = {
        hot: true,
        watchDelay: 300,
        stats: {
            cached: false,
            cachedAssets: false,
            colors: true,
            context: __dirname
        },
        proxy: {
            '*': "http://localhost:" + proxyServerPort
        }
    };

    var webpackServer = new WebpackDevServer(webpack(options), devServerOptions);

    webpackServer.listen(webServerPort, function () {
        util.log("server started at http://localhost:" + webServerPort)
    });
});

/***********************************************************************************************************************
 * Copy-ish Tasks
 **********************************************************************************************************************/

gulp.task('copy-index-html', function() {
    return gulp.src(sources.html)
    .pipe(replace(/{%compiledCssFilename%}/, compiledCssFilename))
    .pipe(replace(/{%compiledJsFilename%}/, compiledJsFilename))
    .pipe(gulp.dest(isPackageRelease ? sources.dist : sources.build));
});

gulp.task('copy-assets', function() {
    return gulp.src(sources.assets, {
        base: 'assets'
    })
    .pipe(gulp.dest(path.join(isPackageRelease ? sources.dist : sources.build)));
});

/***********************************************************************************************************************
 * Transpiler Tasks
 **********************************************************************************************************************/

gulp.task('compile-templates', function() {
    return gulp.src(sources.templates)
    .pipe(minifyHTML())
    .pipe(templateCache(
        compiledAngularTemplateCacheFilename, {
            module: 'Templates',
            moduleSystem: 'Browserify',
            standalone: true
        }))
    .pipe(gulp.dest(sources.build));
});

gulp.task('compile-typescript', function() {
    return gulp.src(sources.ts)
    .pipe(ts({
        module: 'commonjs'
    }))
    .pipe(gulp.dest(sources.build));
});

gulp.task('compile-stylus', function() {
    return gulp.src(sources.stylus)
    .pipe(stylus())
    .pipe(concat(compiledCssFilename))
    .pipe(gulp.dest(isPackageRelease ? sources.dist : sources.build))
    .pipe(gulpif(isWatchAndRun, livereload()));
});

/***********************************************************************************************************************
 * Common Tasks
 **********************************************************************************************************************/

gulp.task('build', function() {
    runSequence(
        'clean',
        [
            'copy-assets',
            'copy-index-html',
            'compile-typescript',
            'compile-templates'
        ],
        'compile-stylus'
    );
});

gulp.task('run', function() {
    runSequence(
        'start-server'
    );
});

gulp.task('watchrun', function() {
    isWatchAndRun = true;

    runSequence(
        'clean',
        [
            'copy-assets',
            'copy-index-html',
            'compile-typescript',
            'compile-templates'
        ],
        'compile-stylus',
        'start-livereload',
        'run'
    );
});

gulp.task('release', function() {
    isPackageRelease = true;
    runSequence(
        'clean',
        [
            'copy-assets',
            'copy-index-html',
            'compile-typescript',
            'compile-templates'
        ],
        'compile-stylus',
        'browserify',
        'minify-js',
        'minify-css'
    );
});

gulp.task('releaserun', function() {
    isPackageRun = true;
    isPackageRelease = true;
    runSequence(
        'release',
        'run'
    );
});

gulp.task('webpack', function() {
    runSequence(
        'clean',
        'run',
        'webpack-dev-server'
    );
});

gulp.task('default', ['watchrun']);