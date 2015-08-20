///<reference path='../node_modules/angular2/bundles/typings/angular2/angular2.d.ts'/>
///<reference path='../node_modules/angular2/bundles/typings/angular2/http.d.ts'/>
///<reference path='../node_modules/angular2/bundles/typings/angular2/router.d.ts'/>
///<reference path='../node_modules/angular2/bundles/typings/es6-promise/es6-promise.d.ts'/>
///<reference path='../node_modules/angular2/bundles/typings/rx/rx.d.ts'/>
///<reference path='../node_modules/angular2/bundles/typings/rx/rx-lite.d.ts'/>

/**
 * Custom types for Webpack
 */
declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => any;
};