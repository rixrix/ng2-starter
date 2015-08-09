import {
    Component,
    View,
    Http,
    NgFor,
    NgIf
} from 'angular2/angular2';

import {
    ALL,
    OPEN,
    CLOSED
} from './constants';

@Component({
    selector: 'http-cmp'
})

@View({
    template: <string>require('./main_http.html'),
    directives: [
        NgFor,
        NgIf
    ]
})

export class MainHttp {
    private gitHubRepo: string = "https://api.github.com/repos/rixrix/stencil-webpack-angular2/issues?state=";

    private issueState = {
        ALL,
        OPEN,
        CLOSED
    };

    searchResults: string[];

    totalSearchResults: number = 0;
    
    constructor(private http: Http) {}
    
    queryGithubIssues(selectedType: string): void {

        this.http.get(this.gitHubRepo + selectedType)
        .toRx()
        .map(result => result.json())
        .subscribe((issues) => {
            this.searchResults = issues;
            this.totalSearchResults = issues.length;
        })
    }
    
}