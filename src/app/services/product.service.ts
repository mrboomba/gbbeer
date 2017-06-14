import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private http: Http) {

  }

  public getNewproduct(): Observable<any> {
    console.log("getNewproduct")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this.http.get('http://localhost:3000/api/beer/newcoming?', options).map(data => data);
  }

   public getAllproduct(): Observable<any> {
    console.log("getAllproduct")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this.http.get('http://localhost:3000/api/beer/all?', options).map(data => data);
  }
   public getBestproduct(): Observable<any> {
    console.log("getBestproduct")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this.http.get('http://localhost:3000/api/beer/bestsell?', options).map(data => data);
  }
  public getPopproduct(): Observable<any> {
    console.log("getPopproduct")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this.http.get('http://localhost:3000/api/beer/popular?', options).map(data => data);
  }

  public getSendToCartproduct(id :String): Observable<any> {
    console.log("getSendToCartproduct")
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    let options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this.http.get('http://localhost:3000/api/addtocart/'+id, options).map(data => data);
  }



  public join(id: String): Observable<any> {
    console.log("join")
    let data = {
      "id": id
    }
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/join_activity', body, options).map(data => data);
  }





}
