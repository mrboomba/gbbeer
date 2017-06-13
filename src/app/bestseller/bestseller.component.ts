import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {

  private bestProduct ;

  constructor(private productService:ProductService) {
  this.productService.getBestproduct().subscribe(data => this.getBestproduct(data)) }

  getBestproduct(data) {
  console.log(JSON.parse(data._body))
  this.bestProduct  = JSON.parse(data._body)
  }

  ngOnInit() {
  }

}
