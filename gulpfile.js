var path = require('path');

var clean = require("gulp-clean");
var express = require('express');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
var util = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var _ = require('lodash');

var appIndexHtmlFilename = 'index.html';
var appProjectName = 'stencil';
var compiledJsFilename = appProjectName + '.compiled.js';

var webServerPort = 3000;
var proxyServerPort = 3001;
var isPackageRun = false;
var isPackageRelease = false;
var isExpressOnProxyServer = true;

var sources = {
    ts: 'app/**/*.ts',
    build: './build/app',
    dist: './dist/app',
    html: 'app/' + appIndexHtmlFilename,
    assets: [
        'app/assets/**/*.*'
    ]
};

/***********************************************************************************************************************
 * Local functions / Utilities
 **********************************************************************************************************************/

gulp.task('clean', function() {
    return gulp.src([
        sources.build,
        sources.dist
    ], {
        read: false
    })
    .pipe(clean());
});

gulp.task('start-server', function() {
    var server = express();
    var port = isExpressOnProxyServer ? proxyServerPort : webServerPort;

    server.get('/', function(request, response) {
        response.sendFile(path.join(__dirname, '/', sources.html));
    })
    .use(express.static(path.resolve(__dirname)))
    .listen(port);

    if (!isExpressOnProxyServer) {
        util.log('express @ http://localhost:' + port);
    }
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
        util.log("webpack @ http://localhost:" + webServerPort)
    });
});

/***********************************************************************************************************************
 * Copy-ish Tasks
 **********************************************************************************************************************/

gulp.task('copy-index-html', function() {
    return gulp.src(sources.html)
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

gulp.task('webpackify', function(callback) {
    var webpackOptions = require('./webpack.config');
    var outputPath = isPackageRelease ? sources.dist : sources.build;

    webpackOptions.entry = {
        stencil: 'app/' + appProjectName + '.ts'
    };

    webpackOptions.output = {
        filename: path.join(outputPath, '/', compiledJsFilename)
    };

    webpack(webpackOptions, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        callback();
    });
});

/***********************************************************************************************************************
 * Common Tasks
 **********************************************************************************************************************/

gulp.task('build', function() {
    runSequence(
        'clean',
        [
            'copy-assets',
            'copy-index-html'
        ],
        'webpackify'
    );
});

gulp.task('run', function() {
    isExpressOnProxyServer = false;
    runSequence(
        'start-server'
    );
});

gulp.task('watchrun', function() {
    runSequence(
        'webpack-dev-server'
    );
});

gulp.task('release', function() {
    isPackageRelease = true;
    runSequence(
        'clean',
        [
            'copy-assets',
            'copy-index-html'
        ],
        'webpackify'
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

gulp.task('default', ['watchrun']);