/// <reference path="libs.d.ts" />

require('./assets/css/material.css');
require('./styles/index.css');

import {
    bootstrap,
    bind
} from 'angular2/angular2';

import {
    routerInjectables,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

import {AppEntryPoint} from './application'

bootstrap(AppEntryPoint, [
    routerInjectables,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]);
