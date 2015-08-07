import {
    Component,
    View,
    Http,
    NgFor,
    NgIf
} from 'angular2/angular2';

enum GithubIssue {
    all,
    open,
    closed    
}

@Component({
    selector: 'http-cmp'
})

@View({
    template: <string>require('./http_component.html'),
    directives: [
        NgFor,
        NgIf
    ]
})

export class HttpComponent {
    private seletedIssueType: string;
    private issueType = GithubIssue;    
    private gitHubRepo: string = "https://api.github.com/repos/rixrix/stencil-webpack-angular2/issues?state=";
    
    searchResults: string[];
    totalSearchResults: number = 0;
    
    constructor(private http: Http) {}
    
    queryGithubIssues(selectedType: string): void {
        let issueType = GithubIssue[selectedType];
        
        this.http.get(this.gitHubRepo + issueType)
        .toRx()
        .map(result => result.json())
        .subscribe((issues) => {
            this.searchResults = issues;
            this.totalSearchResults = issues.length;
        })
    }
    
}