import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

	navbarOpen = false;
	ngOnInit(){
	  
	}
	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}
}
