import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StickyNavModule } from 'ng2-sticky-nav';
import { NgStickyDirective } from 'ng-sticky';
import {DropdownModule} from "ng2-dropdown";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NgStickyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    StickyNavModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
