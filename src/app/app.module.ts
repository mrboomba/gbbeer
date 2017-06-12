import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { provideRoutes} from '@angular/router';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BeerComponent } from './beer/beer.component';
import { CartComponent } from './cart/cart.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ReviewComponent } from './review/review.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { EachComponent } from './each/each.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { AllproComponent } from './allpro/allpro.component';


import {ProductService} from './services/product.service';
import {RegisterService} from './services/register.service';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'beer', component: BeerComponent},
  {path:'each', component: EachComponent},
  {path:'cart', component: CartComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BeerComponent,
    CartComponent,
    BestsellerComponent,
    NewproductComponent,
    ReviewComponent,
    AdvertiseComponent,
    EachComponent,
    LoginComponent,
    RegisterComponent,
    CatagoryComponent,
    AllproComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [RegisterService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
