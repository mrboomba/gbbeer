import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  }

  public register(username :String, password:String, firstname:String,lastname:String,birthDay :String,address:String,email:String) {
  let user = {
  "username" : username,
  "password" : password,
  "firstname" : firstname,
  "lastname" : lastname,
  "address" : address,
  "email" : email,
  "birthday":birthDay
  }
  	this.registerService.register(user).subscribe(data => this.getUser(data)) }

  getUser(data) {
  console.log(JSON.parse(data._body))

  }

}
