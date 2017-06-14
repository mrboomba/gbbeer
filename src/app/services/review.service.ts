import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable()
export class ReviewService {
  user: any;
  private id;
  constructor(private http: Http) {

  }

   public getReview(id :String): Observable<any> {
    console.log("getReview")
    this.id = id;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this.http.get('http://localhost:3000/api/review/'+id, options).map(data => data);
  }

   public comment(data: Object): Observable<any> {
    console.log("comment")
    console.log(data)

    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/comment', body, options).map(data => data);
  }

  getBeerId():String{
  return this.id;
  }

  storeUserData(user){
    this.user = JSON.parse(user._body)
    console.log(this.user);
  }
  getstoreUser(){
  return this.user;
  }






}
