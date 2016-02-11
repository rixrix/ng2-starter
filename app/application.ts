
import {
    Component,
    View
} from 'angular2/core';

import {
    RouteConfig,
    RouterOutlet,
    RouterLink
} from 'angular2/router';

import {Main} from 'main/main';
import {MainShadowDOM} from  'dom/main_shadowdom';
//import {MainHttp} from 'http/main_http';
import {MainComponent} from 'components/main_component';
import {MainEvents} from 'events/main_events';

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
    { path: '/', as: 'home', component: Main },
    { path: '/shadow-dom', as: 'shadow-dom', component: MainShadowDOM },
    //{ path: '/http', as: 'http', component: MainHttp },
    { path: '/component', as: 'component', component: MainComponent },
    { path: '/events', as: 'events', component: MainEvents }
])

export class AppEntryPoint {
    constructor() {
    }
}