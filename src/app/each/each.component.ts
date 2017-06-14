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
private beer
private img
private id;

  constructor(private reviewService:ReviewService,private router: Router) {
	//this.reView= this.reviewService.getstoreUser()
  this.id = this.reviewService.getstoreUser()
  console.log(this.id)
  this.reviewService.getReview(this.id).subscribe(data => this.getReview(data))
  this.reviewService.getBeer(this.id).subscribe(data => this.getBeer(data))
  
  }


  public getReview(data){
  this.reView= JSON.parse(data._body).beer
  }


  public getBeer(data){
  this.beer= JSON.parse(data._body)
  console.log(this.beer)
  console.log(this.beer.img)
  this.img = 'http://localhost:3000/view/img/'+this.beer.img

  }


public sendComment(comment:String, star:String) {
  let user = {
  "comment" : comment,
  "star" : star,
  "beer":this.id
  }
  	this.reviewService.comment(user).subscribe(data => this.getUser(data))  }

getUser(data) {
  console.log(data._body)

  }


  ngOnInit() {

  }


}
