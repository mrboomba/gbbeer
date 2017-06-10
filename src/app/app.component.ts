import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  exists = true;
  check= true;
  pop=true;

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