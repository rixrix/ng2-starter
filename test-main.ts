/// <reference path="./app/libs.d.ts" />

require('reflect-metadata');
require('angular2/test');
require('angular2/mock');

var testContext = require.context('./app', true, /\.spec\.ts/);

testContext.keys().forEach(testContext);