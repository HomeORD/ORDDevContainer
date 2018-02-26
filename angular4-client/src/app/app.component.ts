<<<<<<< HEAD
import { Component, HostListener, ElementRef   } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition  
}from '@angular/animations';
=======
import { Component } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';
import { 
   trigger, 
   state, 
   style, 
   animate, 
   transition 
 } from '@angular/animations';
 
 import {ContainerComponent} from './container/container.component';
>>>>>>> f87f4b0509ff3ac33e9d92ab55f792b9c7d70f35

@Component({
  template: `<container [sections]="sections"></container>`,
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css'],  
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
=======
  styleUrls: ['./app.component.css'],
    animations: [ 
    trigger('scrollAnimation', [ 
      state('show', style({ 
        opacity: 1, 
        transform: "translateX(0)" 
      })), 
      state('hide',   style({ 
        opacity: 0, 
        transform: "translateX(-100%)" 
      })), 
      transition('show => hide', animate('700ms ease-out')), 
      transition('hide => show', animate('700ms ease-in')) 
    ]) 
>>>>>>> f87f4b0509ff3ac33e9d92ab55f792b9c7d70f35
  ]
})

export class AppComponent {
  title = 'Tour of Heroes';
  state = 'hide';
  
<<<<<<< HEAD
  public sections = [
  {name:"Bird",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg"},
  {name:"Wheel", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg"},
  {name:"Horses", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/D%C3%BClmen%2C_Merfeld%2C_D%C3%BClmener_Wildpferde_in_der_Wildbahn_--_2016_--_4740.jpg/320px-D%C3%BClmen%2C_Merfeld%2C_D%C3%BClmener_Wildpferde_in_der_Wildbahn_--_2016_--_4740.jpg"},
  {name:"Lamp",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Gl%C3%BChlampe_explodiert.jpg/320px-Gl%C3%BChlampe_explodiert.jpg"}];

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      //const componentPosition = this.el.nativeElement.offsetTop;
      const componentPosition = 500;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition) {
         this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }
=======
    public sections = [
  {name:"Bird",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg"},
  {name:"Wheel", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg"},
  {name:"Horses", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/D%C3%BClmen%2C_Merfeld%2C_D%C3%BClmener_Wildpferde_in_der_Wildbahn_--_2016_--_4740.jpg/320px-D%C3%BClmen%2C_Merfeld%2C_D%C3%BClmener_Wildpferde_in_der_Wildbahn_--_2016_--_4740.jpg"}];

  constructor(public el: ElementRef) { } 



  @HostListener('window:scroll', ['$event']) 
  checkScroll() { 
    const componentPosition = this.el.nativeElement.offsetTop 
    const scrollPosition = window.pageYOffset 


    if (scrollPosition >= componentPosition) { 
      this.state = 'show' 
    } else { 
      this.state = 'hide' 
    } 
  } 
>>>>>>> f87f4b0509ff3ac33e9d92ab55f792b9c7d70f35
}
