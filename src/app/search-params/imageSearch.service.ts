import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageSearchService {
    private searchUrl = 'https://www.googleapis.com/customsearch/v1?';  // URL to web API
    private apiKey = 'AIzaSyBbaPben2bvrrAHli5eDGEw1t4q58jSkSk'; // Use your API key here
    private cx = '011828124882349175087:zujpxbgaedu'; // Custom Search Engine id (use your own here)

    constructor (private http: Http) {}

    search(query): Observable<any>{
        return this.http.get(this.searchUrl + 'key=' + this.apiKey + '&cx=' + this.cx + '&searchType=image' + '&q=' + query)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let searchResult = res.json();
        return searchResult.items || {};
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
