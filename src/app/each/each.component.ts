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
private id;

  constructor(private reviewService:ReviewService,private router: Router) {
	//this.reView= this.reviewService.getstoreUser()
  this.id = this.reviewService.getstoreUser()
  console.log(this.id)
  this.reviewService.getReview(this.id).subscribe(data => this.getReview(data))
  /*this.reView= [{
    'name':'eiei',
    'date':11,
    'comment':"dfdssds"
    },{
    'name':'eiei',
    'date':11,
    'comment':"dfdssds"
    },{
    'name':'eiei',
    'date':11,
    'comment':"dfdssds"
    },{
    'name':'eiei',
    'date':11,
    'comment':"dfdssds"
    }]*/
  }

  public getReview(data){
  this.reView= JSON.parse(data._body).beer
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
