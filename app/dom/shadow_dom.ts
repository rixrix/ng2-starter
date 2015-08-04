
import {
    Component,
    View,
    NgIf
} from 'angular2/angular2';

import {ShadowDOMEnabled} from './shadow_dom_enabled';
import {ShadowDOMDisabled} from './shadow_dom_disabled';
import {ShadowDOMEnabledNative} from './shadow_dom_enabled_native';

@Component({
    selector: 'shadow-dom'
})

@View({
    template: <string>require('./shadow_dom.html'),
    directives: [
        NgIf,
        ShadowDOMEnabled,
        ShadowDOMDisabled,
        ShadowDOMEnabledNative
    ]
})

export class ShadowDOM {
    title: string;

    private isShowDisabledShadowDom: boolean = true;
    private isShowEmulatedShadowDom: boolean = false;
    private isShowNativeShadowDom: boolean = false;

    constructor() {
        this.title = "Shadow DOM";
    }

    toggleComponentDisplay(type: string): void {
        switch(type) {
            case 'none':
                this.isShowDisabledShadowDom = true;
                this.isShowEmulatedShadowDom = false;
                this.isShowNativeShadowDom = false;
                break;
            case 'emulated':
                this.isShowDisabledShadowDom = false;
                this.isShowEmulatedShadowDom = true;
                this.isShowNativeShadowDom = false;
                break;
            case 'native':
                this.isShowDisabledShadowDom = false;
                this.isShowEmulatedShadowDom = false;
                this.isShowNativeShadowDom = true;
                break;
        }
    }
}