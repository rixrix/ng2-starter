import {
    Directive,
    ElementRef
} from 'angular2/angular2';

import {DOM} from 'angular2/src/dom/dom_adapter';

@Directive({
    selector: '[tooltip]',
    host: {
        '(mouseenter)': 'onMouseEnter($event)',
        '(mouseleave)': 'onMouseLeave($event)'
    }
})

export class ToolTip {

    modifiedTitle: string = '';

    constructor(element: ElementRef) {
        DOM.appendChild(document.body, DOM.createElement('tooltip-popup'));
    }

    set title(value: string) {
        this.modifiedTitle = value.toUpperCase() + ' !';
    }

    onMouseEnter($event) {
        console.log('onMouseEnter ', $event);
    }

    onMouseLeave($event) {
        console.log('onMouseLeave', $event);
    }
}