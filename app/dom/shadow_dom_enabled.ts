
import {
    Component,
    View,
    ViewEncapsulation
} from 'angular2/angular2';

@Component({
    selector: 'shadow-dom-enabled'
})

@View({
    template: <string>require('./shadow_dom_enabled.html'),
    encapsulation: ViewEncapsulation.EMULATED
})

export class ShadowDOMEnabled {

    constructor() {
    }
}