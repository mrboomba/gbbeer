import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

 private allProduct ;

  constructor(private productService:ProductService) {
  this.productService.getAllproduct().subscribe(data => this.getAllproduct(data)) }

  getAllproduct(data) {
  console.log(JSON.parse(data._body))
  this.allProduct  = JSON.parse(data._body)
  }

  ngOnInit() {
  }

  public getId(id:String) {
  console.log(id)
  console.log("id")
  }

}
