import {
    Component,
    View,
    Http,
    httpInjectables,
    Inject
} from 'angular2/core';

import {
    NgFor,
    NgIf,
} from 'angular2/common';

import {
    ALL,
    OPEN,
    CLOSED
} from './constants';

@Component({
    selector: 'http-cmp',
    viewBindings: [httpInjectables]
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

    http: Http;

    constructor(@Inject(Http) http: Http) {
        this.http = http;
    }
    
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