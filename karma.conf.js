// Karma configuration
// Generated on Fri Aug 07 2015 16:40:44 GMT+1200 (NZST)

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.ts',
      {pattern: 'app/**/*.spec.ts', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test-main.ts': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Webpack
    webpackServer: {
      noInfo: true
    },

    webpack: {
      resolve: {
        root: __dirname,
        extensions: ['','.ts','.js'],
        alias: {}
      },
      module: {
        loaders: [
          { test: /\.ts$/,loader: 'typescript-simple'},
          { test: /\.html$/, loader: 'raw' },
          { test: /\.css$/,  loader: 'raw' }
        ]
      },
      stats: { colors: true, reasons: true },
      debug: false
    },

    customLaunchers: {
      // custom launcher for Chrome on TravisCI
      // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
      chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--no-first-run']
      },
      chrome_desktop: {
        base: 'Chrome',
        flags: ['--no-first-run']
      }
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['chrome_travis_ci'];
    configuration.singleRun = true;
    configuration.autoWatch = false;
  } else {
    configuration.browsers = ['chrome_desktop'];
  }

  config.set(configuration);
};
