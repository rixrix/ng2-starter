import {
    Component,
    View
} from 'angular2/angular2';

import {
    ChildToParent
} from './child_to_parent';

@Component({
    selector: 'events-cmp'
})

@View({
    template: <string>require('./main_events.html'),
    directives: [
        ChildToParent
    ]
})

export class MainEvents {

    message: string;

    constructor() {

    }

    showMessage(message: any) {
        this.message = message;
    }
}