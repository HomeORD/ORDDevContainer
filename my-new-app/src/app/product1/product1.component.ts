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
  templateUrl: 'product1.component.html',
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
export class Product1Component {
  title = 'my-new-app';
  state = 'hide';
  isNavbarCollapsed = true;
  public show:boolean = false;
  public buttonName:any = 'Menu';
  
  private carouselToken: string;

  public carouselTileItems: Array<any>;
  public productItems: Array<any>;
  public carouselTile: NguCarousel;

  constructor(private carousel: NguCarouselService) {  }
  
  ngOnInit(){
	 
	this.productItems = ['product1', 'product2', 'product3', 'product4', 'product5', 'product5', 'product5', 'product5'];
	
	this.carouselTileItems = [{"id":'../assets/image9.JPG', "name":'product1'},
							  {"id":'../assets/image10.jpg', "name":'product2'},			
                              {"id":'../assets/image11.jpg', "name":'product3'},
                              {"id":'../assets/image9.jpg', "name":'product4'},
                              {"id":'../assets/image10.jpg', "name":'product5'},
							  {"id":'../assets/image11.jpg', "name":'product6'},
							  {"id":'../assets/image9.jpg', "name":'product7'},
							  {"id":'../assets/image10.jpg', "name":'product8'}
							 ];
							 
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
      const componentPosition = 300;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > componentPosition) {
         this.state = 'show'
		 
      }
 
	  else {
        this.state = 'hide'
		this.show = false;
		this.buttonName = "Menu";
		this.isNavbarCollapsed = true
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