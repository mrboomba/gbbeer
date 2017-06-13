import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable()
export class ReviewService {

  constructor(private http: Http) {

  }

  public register(data: Object): Observable<any> {
    console.log("join")
    console.log(data)
    
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/register', body, options).map(data => data);
  }





}
