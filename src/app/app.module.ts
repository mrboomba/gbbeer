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

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'beer', component: BeerComponent},
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
    AdvertiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
