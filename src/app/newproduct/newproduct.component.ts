import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

	private newProduct ;

  constructor(private productService:ProductService) {
  this.productService.getNewproduct().subscribe(data => this.getNewProduct(data)) }

  getNewProduct(data) {
  console.log(JSON.parse(data._body))
  this.newProduct  = JSON.parse(data._body)
  }

  ngOnInit() {
  }

}
