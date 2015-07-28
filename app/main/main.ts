import {
    Component,
    View
} from 'angular2/angular2';

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