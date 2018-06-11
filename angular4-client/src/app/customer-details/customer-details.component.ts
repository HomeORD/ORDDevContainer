
import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [DataService]
})
export class CustomerDetailsComponent {

  @Input() customer: Customer;
}