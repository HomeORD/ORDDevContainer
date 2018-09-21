import { Component, HostListener, ElementRef } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

export class AppComponent {
  title = 'my-new-app';
  state = 'hide';
  public show:boolean = false;
  public buttonName:any = 'Menu';
  
  private carouselToken: string;

  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;

  constructor(private carousel: NguCarouselService) {  }
  
  ngOnInit(){
    this.carouselTileItems = [
	 '../assets/image1.jpg', '../assets/image2.jpg', '../assets/image3.jpg', '../assets/image4.jpg', '../assets/image5.jpg', '../assets/image6.jpg', '../assets/image7.jpg', '../assets/image8.jpg'];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  initDataFn(key: NguCarouselStore) {
    this.carouselToken = key.token;
  }

  resetFn() {
    this.carousel.reset(this.carouselToken);
  }

  moveToSlide() {
    this.carousel.moveToSlide(this.carouselToken, 2, false);
  }

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len ; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }
  
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      //const componentPosition = this.el.nativeElement.offsetTop;
      const componentPosition = 500;
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
