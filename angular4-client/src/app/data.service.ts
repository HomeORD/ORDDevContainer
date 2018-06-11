import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { Customer } from './customer';
 
@Injectable()
export class DataService {
 
  private customersUrl = 'api/customer';  // URL to web API
 
  constructor(private http: Http) { }
 
  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
               .toPromise()
               .then(response => response.json() as Customer[])
               .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}