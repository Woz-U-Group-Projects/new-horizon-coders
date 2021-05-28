import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customers } from '../../app/models/customers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginRoute = 'http://localhost:3001/customers';
   public customers: Customers[] = [];

  constructor( private http: HttpClient ) { }
  getCustomers(){
    this.http.get<Customers[]>(this.loginRoute).subscribe(customers => {
      this.customers = customers;
      console.log("customers", this.customers);

    });
  }

  ngOnInit() {
    this.getCustomers();
  }

}

 