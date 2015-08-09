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
} from './tooltip';

@Component({
    selector: 'components'
})

@View({
    template: <string>require('./components.html'),
    directives: [
        NgIf,
        ToolTip
    ]
})

export class Components {
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