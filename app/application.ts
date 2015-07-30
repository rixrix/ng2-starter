
import {
    Component,
    View
} from 'angular2/angular2';

import {
    RouteConfig,
    RouterOutlet,
    RouterLink
} from 'angular2/router';

import {Main} from './main/main';

@Component({
    selector: 'app'
})
@View({
    directives: [
        RouterLink,
        RouterOutlet
    ],
    template: <string>require('./application.html')
})
@RouteConfig([
    { path: '/', as: 'home', component: Main }
])

export class AppEntryPoint {
    constructor() {
    }
}