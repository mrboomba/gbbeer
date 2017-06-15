import { Component } from '@angular/core';
import {RegisterService} from './services/register.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  exists = true;
  check= true;
  pop=true;
  private isLogin

   constructor(private register: RegisterService) {
   this.register.checkAuth().subscribe(data => this.getData(data))

  }

  getData(data){
     let value = JSON.parse(data._body)
     console.log(value.status)
     this.isLogin = value.status
  }


  toggleExists() {
    this.exists = true;
  }
  toggleExists2() {
    this.exists = false;
  }
  toggleExists3() {
    this.check= true;
    this.pop=true;
  }
  toggleExists4() {
    this.check= false;
    this.pop = false;
  }
   
   
}