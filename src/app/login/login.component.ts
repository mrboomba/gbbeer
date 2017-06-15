import {RegisterService} from '../services/register.service';
import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private check
  constructor(private loginService:RegisterService ,private router: Router) {}

  ngOnInit() {
  }
   public login(username :String, password:String) {
  let user = {
  "username" : username,
  "password" : password
  }
  	this.loginService.login(user).subscribe(data => this.getUser(data)) }

  getUser(data) {
  console.log(data._body)
  data = JSON.parse(data._body) 
  this.check = data.status
  if(this.check==="success") {
  console.log("refresh")
   window.location.href = '/'
  }

  }

}
