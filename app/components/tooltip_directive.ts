require('./basic_tooltip_popup.css');

import {
    Directive,
    ElementRef
} from 'angular2/angular2';

import {
    DOM
} from 'angular2/src/dom/dom_adapter';

@Directive({
    selector: '[tooltip]',
    host: {
        '(mouseenter)': 'onMouseEnter($event)',
        '(mouseleave)': 'onMouseLeave($event)'
    }
})

export class ToolTip {

    tooltipElement = DOM.createElement('basic-tooltip-popup');

    constructor(element: ElementRef) {
    }

    onMouseEnter($event) {
        this.tooltipElement.innerHTML = require('./basic_tooltip_popup.html');
        DOM.appendChild(document.body, this.tooltipElement);
    }

    onMouseLeave($event) {
        DOM.removeChild(document.body, this.tooltipElement);
    }
}