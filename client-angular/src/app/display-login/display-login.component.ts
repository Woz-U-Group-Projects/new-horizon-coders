import { Component, OnInit, Input } from '@angular/core';
import { Customers } from '../../app/models/customers';

@Component({
  selector: 'app-display-login',
  templateUrl: './display-login.component.html',
  styleUrls: ['./display-login.component.css']
})
export class DisplayLoginComponent implements OnInit {
  @Input() customers: Customers;

  constructor() { }

  ngOnInit() {
  }

}
