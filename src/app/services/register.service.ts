import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable()
export class RegisterService {

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
  public login(data: Object): Observable<any> {
    console.log("loginjoin")
    console.log(data)
    
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/login', body, options).map(data => data);
  }

   public checkAuth(): Observable<any> {
    console.log("checkAuth")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this.http.get('http://localhost:3000/api/islogin', options).map(data => data);
  }

public logout(): Observable<any> {
    console.log("logoutlogouts")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this.http.get('http://localhost:3000/api/logout', options).map(data => data);
  }




}
