import { Component, OnInit } from '@angular/core';
import { SignupService } from "../signup.service"
import { Signup } from '../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: Signup = new Signup();
  constructor(private signupService: SignupService) { }
  newSignup: Signup = new Signup();
  signUp: Signup[] = [];

  getSignup() {
    this.signupService.getSignup().subscribe(signup => (this.signUp = signup));
  }

  addSignup() {
    this.signupService.addSignup(this.newSignup).subscribe(result => {
      this.getSignup();
      this.newSignup = new Signup();
    });
  }

  ngOnInit() {
    this.getSignup();
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
}

}
