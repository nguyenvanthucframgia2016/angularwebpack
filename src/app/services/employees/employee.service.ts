import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Employee } from '../../models/employee';

@Injectable()

export class EmployeeService {
    baseUrl: string = 'http://58a0549fdc09ed12006236ee.mockapi.io/api/employee/employees';

    constructor(private http: Http) {}

    getListEmployee(): Observable<Employee[]> {
        return this.http.get(this.baseUrl)
            .map((response: Response) => <Employee[]>response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    addEmployee(employee: any): Observable<any> {
        return this.http.post(this.baseUrl, employee)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    deleteEmployee(id: number): Observable<any> {
        return this.http.delete(this.baseUrl + '/' + id)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get(this.baseUrl + '/' + id)
            .map((response: Response) => <Employee>response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    updateEmployee(id: number, data: any): Observable<any> {
        return this.http.put(this.baseUrl + '/' + id, data)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
}