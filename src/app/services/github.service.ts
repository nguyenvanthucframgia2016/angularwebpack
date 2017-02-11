import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Repo } from '../models/repo';

@Injectable()

export class GitHubService {
    baseURL:string = "https://api.github.com/";

    constructor(private http: Http) {}

    getRepositories(userName: string): Observable<Repo[]> {
        return this.http.get(this.baseURL + "users/" + userName + "/repos")
            .map(this.extractRepos)
            .catch(this.handleError)
    }


    private extractRepos(response: Response) {
        return <Repo[]>response.json();
    }

    private handleError(response:Response){
        console.error(response);
        return Observable.throw(response.json().error || 'Server Error');
    }
}