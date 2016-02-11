import {
    Component,
    View
} from 'angular2/core';

@Component({
    selector: 'main'
})

@View({
    template: <string> require('./main.html')
})

export class Main {
    constructor() {

    }
}