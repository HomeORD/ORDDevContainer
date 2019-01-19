import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import jQuery from "jquery"
import { NguCarouselModule } from '@ngu/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './posts/list.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { EchoService } from './services/echo.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, ListComponent, HomeComponent, Product1Component,
	Product2Component, Product3Component, Product4Component, Product5Component
  ],
  imports: [
    BrowserModule,
	NguCarouselModule,
	BrowserAnimationsModule,
	HttpClientModule,
    RouterModule.forRoot([
	{
        path: '',
        pathMatch: 'full',
        redirectTo:'/home'
    },
       { path: 'home', component: HomeComponent },
       { path: 'posts', component: ListComponent },
	   { path: 'product1', component: Product1Component },
	   { path: 'product2', component: Product2Component },
	   { path: 'product3', component: Product3Component },
	   { path: 'product4', component: Product4Component },
	   { path: 'product5', component: Product5Component }
     ])
  ],
  providers: [EchoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
