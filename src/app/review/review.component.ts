import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  private popProduct ;
  private popProduct2 ;
  private checkfalse;

  constructor(private productService:ProductService,private reviewService:ReviewService,private router: Router) {
  this.productService.getPopproduct().subscribe(data => this.getPopproduct(data)) }

  getPopproduct(data) {
  console.log(JSON.parse(data._body))
  this.popProduct2  = JSON.parse(data._body).length
  this.popProduct  = JSON.parse(data._body)
  console.log(this.popProduct2)
  }

  public sentID(id :String) {
    this.reviewService.getReview(id).subscribe(data => {
    this.reviewService.storeUserData(data);
      this.router.navigate(['/each']);
    });
  }
  public sentIDToCart(id :String) {
    this.productService.getSendToCartproduct(id).subscribe(data => this.getaddcart(data))
    window.location.href =''
  }
 getaddcart(data){
  this.checkfalse = JSON.parse(data._body).status
  if(this.checkfalse=='fail'){
  window.location.href ='/#popup1'
  }
  console.log(this.checkfalse)
 }

  ngOnInit() {
  }

}
