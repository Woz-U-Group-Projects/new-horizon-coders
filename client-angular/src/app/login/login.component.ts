import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { Login } from "../models/login";
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = new Login();
  constructor(private loginService: LoginService) {}
  newLogin: Login = new Login();
  logIn: Login[] = [];

getLogin() {
    this.loginService.getLogin().subscribe(login => (this.logIn = login));
  }

  addLogin() {
    this.loginService.addLogin(this.newLogin).subscribe(result => {
      this.getLogin();
      this.newLogin = new Login();
    });
  }
 

  ngOnInit() {
    this.getLogin();
  }

}
