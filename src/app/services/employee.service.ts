import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Employee } from '../models/employee';

@Injectable()

export class EmployeeService {
    baseUrl: string = 'http://58a0549fdc09ed12006236ee.mockapi.io/api/employee/employees';
    constructor(private http: Http) {}

    getListEmployee(): Observable<Employee[]> {
        return this.http.get(this.baseUrl)
            .map((response: Response) => <Employee[]>response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }
}