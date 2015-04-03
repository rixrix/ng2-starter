var webpack = require('webpack');
var path = require('path');
var cwdPath = __dirname;
var nib = require('nib');
var fs = require('fs');

var options = {
    devtool: "inline-source-map",
    debug: true,
    cache: true,
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'typescript-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.styl$/,
                loader: 'style!css?skipRequireAndAddPath=app/!stylus!'
            }
        ]
    },
    transforms: [
        function(file) {
            return fs.createReadStream(file);
        }
    ],
    stylus: {
        use: [nib()]
    },
    wrap: {
        strict: {
            before: [
                '"use strict";'
            ]
        }
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/^.*\.(html|css|styl)$/, function (request) {
            var relative = path.relative(cwdPath, request.context);
            var splitPath = relative.split(path.sep);

            if (splitPath[0] !== 'app') {
                relative = splitPath.slice(1).join(path.sep);
                request.context = path.join(cwdPath, relative);
            }
        })
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        alias: {
            'angular': 'node_modules/angular/angular.min',
            'angular-route': 'node_modules/angular-route/angular-route.min',
            'angular-sanitize': 'node_modules/angular-sanitize/angular-sanitize.min',
            'angular-module': 'app/angular-module'
        },
        modulesDirectories: ['.', 'app', 'web_modules', 'node_modules']
    },
    output: {
        path: '/',
        filename: 'stencil.compiled.js'
    }
};

module.exports = options;