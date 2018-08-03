import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgStickyDirective } from 'ng-sticky';
import { DropdownModule} from "ng2-dropdown";
import { HttpModule } from '@angular/http';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { SlickModule } from 'ngx-slick';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarousel } from 'slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DropdownComponent,
    NgStickyDirective,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    StickyNavModule,
    DropdownModule,
    HttpModule,
    UserModule,
    RouterModule,
    routing,
    SlickModule.forRoot(),
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
