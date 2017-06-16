import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';
import {RegisterService} from '../services/register.service';


@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {

  private bestProduct ;
  private bestProduct2 ;
  private checkfalse;

  constructor(private productService:ProductService,private reviewService:ReviewService,private router: Router) {
  this.productService.getBestproduct().subscribe(data => this.getBestproduct(data)) }

  getBestproduct(data) {
  console.log(JSON.parse(data._body))
  this.bestProduct2  = JSON.parse(data._body).length
  this.bestProduct  = JSON.parse(data._body)
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
