
import {
    Component,
    View
} from 'angular2/angular2';

import {
    RouteConfig,
    RouterOutlet,
    RouterLink
} from 'angular2/router';

import {Main} from 'main/main';
import {ShadowDOM} from  'dom/shadow_dom';
import {HttpComponent} from 'http/http_component';
import {Components} from 'components/components';

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
    { path: '/shadow-dom', as: 'shadow-dom', component: ShadowDOM },
    { path: '/http', as: 'http', component: HttpComponent},
    { path: '/component', as: 'component', component: Components}
])

export class AppEntryPoint {
    constructor() {
    }
}