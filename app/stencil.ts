/// <reference path="libs.d.ts" />

require('./assets/css/material.css');
require('./styles/index.css');

import {bootstrap} from 'angular2/platform/browser';
import {
    provide,
    enableProdMode
} from 'angular2/core';

import {
    ROUTER_PROVIDERS,
    LocationStrategy,
    PathLocationStrategy,
    ROUTER_DIRECTIVES,
    RouteConfig,
    Router,
    APP_BASE_HREF
} from 'angular2/router';

import {AppEntryPoint} from './application'

bootstrap(AppEntryPoint, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}),
    provide(APP_BASE_HREF, {useValue: '/stencil'})
]);
