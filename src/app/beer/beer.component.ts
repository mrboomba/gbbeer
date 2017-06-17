import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import {ReviewService} from '../services/review.service';
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

 private allProduct ;
 private colorProduct;
 private countryProduct;
 private allProductTemp;
 private price
 private checkfalse;

  constructor(private productService:ProductService,private reviewService:ReviewService,private router: Router) {
    this.colorProduct = 'All'
    this.countryProduct = 'All'

   this.productService.getAllproduct().subscribe(data => this.getAllproduct(data)) 
  }

  getAllproduct(data) {
  console.log(JSON.parse(data._body))
  this.allProduct  = JSON.parse(data._body)
  this.allProductTemp = JSON.parse(data._body)
  }

  ngOnInit() {
  }

  public sentID(id :String) {
    this.reviewService.getReview(id).subscribe(data => {
    this.reviewService.storeUserData(data);
      this.router.navigate(['/each']);
    });
  }
public sentIDToCart(id :String) {
    this.productService.getSendToCartproduct(id).subscribe(data => this.getaddcart(data))
     this.router.navigate(['']);
  }
 getaddcart(data){
  this.checkfalse = JSON.parse(data._body).status
  if(this.checkfalse=='fail'){
  window.location.href ='/#popup1'
  }
  console.log(this.checkfalse)
 }
  public getId(id:String) {
  console.log(id)
  console.log("id")
  }

    compare(a,b) {

  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
compare2(a,b) {

  if (a.price < b.price)
    return -1;
  if (a.price > b.price)
    return 1;
  return 0;
}

   getFilter(){
    let temp = this.allProductTemp
    this.allProduct = new Array()
    if(this.colorProduct==='All'&&this.countryProduct==='All'){
    for(let beer of temp){
    if(beer.price <=this.price){
              this.allProduct.push(beer)}
        
      }
    }
    else if(this.colorProduct!='All'&&this.countryProduct!='All'){
    for(let beer of temp){
       if(beer.color === this.colorProduct && beer.country === this.countryProduct &&beer.price <=this.price) {
          this.allProduct.push(beer)
        }
      }
    }
    else if(this.colorProduct==='All'){
    for(let beer of temp){
        if(beer.country === this.countryProduct &&beer.price <=this.price) {
          this.allProduct.push(beer)
        }
      }
    }
    else if( this.countryProduct ==='All'){
    for(let beer of temp){
        if(beer.color === this.colorProduct &&beer.price <=this.price) {
          this.allProduct.push(beer)
        }
      }
    }
    
   }

   getCountry(country:String) {

   this.countryProduct = country
   this.getFilter()

   }

   getColor(color:String) {
   this.colorProduct = color;
   this.getFilter();
   }
  
   getSortBy(type:String) {
  
    if(type==='Name')
   this.allProduct.sort(this.compare)
   else if(type==='Price')
   this.allProduct.sort(this.compare2)
   }

   rangeValueChanged(value :any) {
     
    this.price = value
    console.log(value)
    this.getFilter()
     
}



 

}
