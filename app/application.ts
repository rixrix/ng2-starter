import {Component, View} from 'angular2/angular2';
import {
    RouteConfig,
    RouterOutlet,
    routerDirectives
} from 'angular2/router';

import {Main} from './main/main';

@Component({
    selector: 'app'
})

@View({
    directives: [
        routerDirectives
    ],
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#!/">Stencil</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#!/">Home</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <router-outlet></router-outlet>
    `
})

@RouteConfig([
    { path: '/', as: 'home', component: Main }
])

export class AppEntryPoint {
    constructor() {
        // empty
    }
}