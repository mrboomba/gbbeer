import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

	private newProduct ;
  private reView ;
  private id;

  public sentID(id :String) {
    
    this.reviewService.getReview(id).subscribe(data => this.getReView(data))
  }

  constructor(private productService:ProductService,
              private reviewService:ReviewService) {
  this.productService.getNewproduct().subscribe(data => this.getNewProduct(data)) 
  
   
  }
   ngOnInit() {
  }

  

  getNewProduct(data) {
  console.log(JSON.parse(data._body))
  this.newProduct  = JSON.parse(data._body)
  }

  getReView(data) {
  console.log(JSON.parse(data._body))
  this.reView  = JSON.parse(data._body)
  }

 

}
