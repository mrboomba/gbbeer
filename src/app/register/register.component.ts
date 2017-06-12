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

  public register(username :String, password:String, name:String,birthDay :String,address:String) {
  let user = {
  "username" : username,
  "password" : password,
  "name" : name,  
  "address" : address,
  }
  	this.registerService.register(user).subscribe(data => this.getUser(data)) }

  getUser(data) {
  console.log(JSON.parse(data._body))
  
  }
 
}
