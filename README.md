[![Build Status](https://travis-ci.org/rixrix/stencil-webpack-angular2.svg)](https://travis-ci.org/rixrix/stencil-webpack-angular2) [![Issue Stats](http://issuestats.com/github/rixrix/stencil-webpack-angular2/badge/issue)](http://issuestats.com/github/rixrix/stencil-webpack-angular2) 
[![Issue Stats](http://issuestats.com/github/rixrix/stencil-webpack-angular2/badge/pr)](http://issuestats.com/github/rixrix/stencil-webpack-angular2)

# Webpack + GulpJS + Angular2 + TypeScript + Others

## Stencil

A simple boilerplate for Angular2, try http://rixrix.github.io/stencil-webpack-angular2

## Features

This is a work progress...

* Basic routing
* Component
* Shadow DOM component
* Material Design Lite (CSS)
* Various usage of bindings, event handling, Webpack loader for HTML, CSS, Stylus or SCSS files, etc
* More to come

## Technologies

* [GulpJS](http://gulpjs.com/)
* [TypeScript](http://www.typescriptlang.org/)
* [Angular2](https://angular.io/)
* [Webpack](webpack.github.io/)
* [NodeJS](https://nodejs.org/)
* [ExpressJS](http://expressjs.com/)
* [DefinitelyTyped](http://definitelytyped.org/tsd/)

## Install npm dependencies

Make sure you have NodeJS and Git, then

```
$ git clone https://github.com/rixrix/stencil-webpack-angular2.git
$ cd </path/to/stencil/cloned/folder>
$ npm install
```

## The Gulp command

By default if you don't specify any parameter to Gulp it will invoke `watchrun` task

```
$ gulp
```

Build only:

```
$ gulp build
```

Run only:

```
$ gulp run
```

Automatically build and run when a file changes:

```
$ gulp watchrun
```

Build a minified version of your JavaScripts and CSS files
 
```
$ gulp release
```

Build and test run the minified version of your JavaScripts and CSS files 

```
$ gulp releaserun
```

For `run`, `watchrun` or `releaserun` tasks, navigate to the following URL:

```
http://localhost:3000
```

## Todos

* Check [Todos](https://github.com/rixrix/stencil-webpack-angular2/issues)

## License

Distributed under [MIT License](http://opensource.org/licenses/MIT)
