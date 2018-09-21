import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import jQuery from "jquery"
import { NguCarouselModule } from '@ngu/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	NguCarouselModule,
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
