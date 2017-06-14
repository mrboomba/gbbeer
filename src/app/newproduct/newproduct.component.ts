import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css'],
 
})
export class NewproductComponent implements OnInit {

	private newProduct ;
  
 

constructor(private productService:ProductService,private reviewService:ReviewService,private router: Router) {
  this.productService.getNewproduct().subscribe(data => this.getNewProduct(data)) 
  
   
  }

  public sentID(id :String) {
    this.reviewService.getReview(id).subscribe(data => {
    this.reviewService.storeUserData(data);
      this.router.navigate(['/each']);
    });
  }

  
   ngOnInit() {
  }

 

  getNewProduct(data) {
  console.log(JSON.parse(data._body))
  this.newProduct  = JSON.parse(data._body)
  }

 

 

}
