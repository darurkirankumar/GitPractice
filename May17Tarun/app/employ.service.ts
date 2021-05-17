import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Employ } from './employ';
@Injectable({
  providedIn: 'root'
})
export class EmployService {

  constructor(private _http : Http) { }

  addEmploy(employ : Employ) : Observable<string> {
    return this._http.post("http://localhost:8080/HibernateRestExample/webapi/employ/employInsert/",employ).
    map((res : Response) => res.text());
  }
}
