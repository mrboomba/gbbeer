import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  private popProduct ;

  constructor(private productService:ProductService) {
  this.productService.getPopproduct().subscribe(data => this.getPopproduct(data)) }

  getPopproduct(data) {
  console.log(JSON.parse(data._body))
  this.popProduct  = JSON.parse(data._body)
  }

  ngOnInit() {
  }

}
