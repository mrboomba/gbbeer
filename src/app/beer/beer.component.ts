import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

 private allProduct ;

  constructor(private productService:ProductService,private reviewService:ReviewService,private router: Router) {
  this.productService.getAllproduct().subscribe(data => this.getAllproduct(data)) }

  getAllproduct(data) {
  console.log(JSON.parse(data._body))
  this.allProduct  = JSON.parse(data._body)
  }

  ngOnInit() {
  }

  public sentID(id :String) {
    this.reviewService.getReview(id).subscribe(data => {
    this.reviewService.storeUserData(data);
      this.router.navigate(['/each']);
    });
  }
public sentIDToCart(id :String) {
    this.productService.getSendToCartproduct(id).subscribe(data => this.getaddcart(data))
  }
 getaddcart(data){
  console.log(JSON.parse(data._body))
 }
  public getId(id:String) {
  console.log(id)
  console.log("id")
  }

}
