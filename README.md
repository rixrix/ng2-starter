# Webpack + GulpJS + Angular2 + TypeScript + Others

## Stencil

A horribly simple boilerplate for frontend development using some good WWW stuff today!

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

## Need Help ?

File an issue https://github.com/rixrix/stencil-webpack-angular2/issues

## Resources

* Relational Folder Structure http://w2ui.com/web/blog/10/Folder-Structure-for-Single-Page-Applications
* Gulp task names https://github.com/mrkev/generator-typescript
* gulp-starter (awesome resource) https://github.com/greypants/gulp-starter

## License

Distributed under [MIT License](http://opensource.org/licenses/MIT)
