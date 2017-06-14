import { Component, OnInit ,Input} from '@angular/core';
import {ReviewService} from '../services/review.service';
import { Subscription } from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
  selector: 'app-each',
  templateUrl: './each.component.html',
  styleUrls: ['./each.component.css']
})
export class EachComponent implements OnInit {
private reView ;
 	
  constructor(private reviewService:ReviewService,private router: Router) {
	this.reView= this.reviewService.getstoreUser()
  }


public sendComment(comment:String, star:String,id: String) {
  let user = {
  "comment" : comment,
  "star" : star,
  "beer":id,
  }
  	this.reviewService.comment(user).subscribe(data => this.getUser(data))  }

getUser(data) {
  console.log(JSON.parse(data._body))

  }

 getReProduct(data) {
  console.log(JSON.parse(data._body))
  this.reView  = JSON.parse(data._body)
  }



  ngOnInit() {
   
  }


}
