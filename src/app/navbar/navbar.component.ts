import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

private newProduct ;

  private isEmptyCart
  private cart
  constructor(private productService:ProductService) { 
  this.productService.checkCart().subscribe(data => this.checkCart(data))
  }

  ngOnInit() {

  }
 public sendService(){
	this.productService.getCartproduct().subscribe(data => this.getcart(data))
  }
  getcart(data){
  console.log(JSON.parse(data._body))
 }

  checkCart(data){
  console.log( JSON.parse(data._body))
  this.cart = JSON.parse(data._body)
  if(Object.keys(this.cart).length===0||this.cart.status==="fail") {
  this.isEmptyCart = true
  } else {
  this.isEmptyCart =false
  }

  console.log(this.isEmptyCart)
 }
 clearCart() {
 this.isEmptyCart = true
 }

}
