/// <reference path="libs.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';

import {AppEntryPoint} from './application'

bootstrap(AppEntryPoint, [
    routerInjectables
]);
