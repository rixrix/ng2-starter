import {
    Component,
    View,
    NgIf
} from 'angular2/angular2';

import {
    TOOL_TIP
} from './constants';

import {
    ToolTip
} from './tooltip_directive';

@Component({
    selector: 'main-component-cmp'
})

@View({
    template: <string>require('./main_component.html'),
    directives: [
        NgIf,
        ToolTip
    ]
})

export class MainComponent {
    directiveTypes = {
        TOOL_TIP
    };

    selectedItem: string = '';

    constructor() {
    }

    onListItemClick(selectedItem: string): void {
        switch (selectedItem) {
            case TOOL_TIP:
                this.selectedItem = selectedItem;
                break;
            default:
                // error
        }
    }
}