
import {
    Component,
    View,
    ViewEncapsulation
} from 'angular2/core';

@Component({
    selector: 'shadow-dom-enabled-native'
})

@View({
    template: <string>require('./shadow_dom_enabled_native.html'),
    encapsulation: ViewEncapsulation.NATIVE,
    styles: [`
        .stencil-updates {
            background: #FF4081;
            position: relative;
            display: flex;
            width: 400px;
            border-radius: 2px;
        }
    `
    ]
})

export class ShadowDOMEnabledNative {

    constructor() {
    }
}