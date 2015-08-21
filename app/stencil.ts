/// <reference path="libs.d.ts" />

require('./assets/css/material.css');
require('./styles/index.css');

import {
    bootstrap,
    bind
} from 'angular2/angular2';

import {
    ROUTER_BINDINGS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

import {AppEntryPoint} from './application'

bootstrap(AppEntryPoint, [
    ROUTER_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]);
