import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgStickyDirective } from 'ng-sticky';
import {DropdownModule} from "ng2-dropdown";
=======
import {ContainerComponent} from './container/container.component';
>>>>>>> f87f4b0509ff3ac33e9d92ab55f792b9c7d70f35

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NgStickyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    StickyNavModule,
    DropdownModule
=======
    BrowserAnimationsModule    
>>>>>>> f87f4b0509ff3ac33e9d92ab55f792b9c7d70f35
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
