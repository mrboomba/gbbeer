import { Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-writereview',
  templateUrl: './writereview.component.html',
  styleUrls: ['./writereview.component.css']
})
export class WritereviewComponent implements OnInit {


private rec;
private rec2 ;
ngOnInit() {
  }

  constructor(private productService:ProductService) {
  this.productService.getRecommend().subscribe(data => this.getPopproduct(data)) }


  getPopproduct(data) {
  console.log(JSON.parse(data._body)) 
  this.rec  = JSON.parse(data._body)

  }

  public sentbil(){
    this.productService.getBuy().subscribe(data => this.getPopproduct2(data)) 
  }


getPopproduct2(data) {
  console.log(JSON.parse(data._body)) 
  }
  public sentIDToCart(id :String) {
    this.productService.getSendToCartproduct(id).subscribe(data => this.getaddcart(data))
  }
 getaddcart(data){
  console.log(JSON.parse(data._body))
 }
}
