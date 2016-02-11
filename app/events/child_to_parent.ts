import {
    Component,
    View,
    EventEmitter
} from 'angular2/core';

@Component({
    selector: 'child-to-parent',
    properties: [
        'title',
        'message',
        'eventType:event-type'
    ],
    events: [
        'showSelectedMessage',
        'messageEvent:onSelectMessage'
    ]
})

@View({
    template: `
        <span>
            {{title}} : <a (click)="showMessageClicked()">Show Message</a>
        </span>
    `
})

export class ChildToParent {
    title: string;
    message: string;
    eventType: string;
    showSelectedMessage = new EventEmitter();
    messageEvent = new EventEmitter();

    constructor() {}

    showMessageClicked() {
        if (this.eventType == 'mapEvent') {
            this.messageEvent.next(this.message);
        } else {
            this.showSelectedMessage.next(this.message);
        }
    }
}