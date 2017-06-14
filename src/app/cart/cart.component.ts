import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private addtocart ;

  constructor(private productService:ProductService) {
   }


  

  ngOnInit() {
  }

}
