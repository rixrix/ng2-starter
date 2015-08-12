/// <reference path="libs.d.ts" />

require('./assets/css/material.css');
require('./styles/index.css');

import {
    bootstrap
} from 'angular2/angular2';

import {routerInjectables} from 'angular2/router';

import {AppEntryPoint} from './application'

bootstrap(AppEntryPoint, [
    routerInjectables
]);
