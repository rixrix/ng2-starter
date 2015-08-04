
import {
    Component,
    View
} from 'angular2/angular2';

@Component({
    selector: 'shadow-dom-disabled'
})

@View({
    template: <string>require('./shadow_dom_disabled.html')
})

export class ShadowDOMDisabled {

    constructor() {
    }
}