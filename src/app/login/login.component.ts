import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:RegisterService ) {}

  ngOnInit() {
  }
   public login(username :String, password:String) {
  let user = {
  "username" : username,
  "password" : password
  }
  	this.loginService.login(user).subscribe(data => this.getUser(data)) }

  getUser(data) {
  console.log(JSON.parse(data._body))

  }

}
