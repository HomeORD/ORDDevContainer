import { EchoService } from '../services/echo.service';
import { Observable } from 'rxjs/Observable';
import { IPost } from '../model/ipost';
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { NguCarousel, NguCarouselStore, NguCarouselService } from '@ngu/carousel';
import {
  trigger,
  state,
  style,
  animate,
  transition  
}from '@angular/animations';

@Component({
   templateUrl: `product3.component.html`,
    styleUrls: ['../app.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateY(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class Product3Component implements OnInit {
   public posts: Observable<IPost[]>;

   constructor(private echoService: EchoService) {}

   public ngOnInit(): void {
       this.posts = this.echoService.getPosts();
   }
  title = 'my-new-app';
  state = 'hide';
  public show:boolean = false;
  public buttonName:any = 'Menu';
  
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      //const componentPosition = this.el.nativeElement.offsetTop;
      const componentPosition = 300;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition) {
         this.state = 'show'
      } else {
        this.state = 'hide'
		this.show = false;
		this.buttonName = "Menu";
      }

    }
  
    toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Close";
    else
      this.buttonName = "Menu";
  }
}