import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cart ;
   private cart2 ;
  private totalPrice ;

  constructor(private productService:ProductService,private reviewService:ReviewService,private router: Router) {

   this.productService.getCartproduct().subscribe(data => this.getcart(data))
   }




	public getcart(data){
  		this.cart= JSON.parse(data._body).beers
     this.cart2= JSON.parse(data._body).beers.length
  		this.totalPrice =JSON.parse(data._body).totalPrice
  		console.log(this.cart2)
  	}

  ngOnInit() {
  }

}
