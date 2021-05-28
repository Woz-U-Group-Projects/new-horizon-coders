import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from 'src/app/login/login.component';
import { DisplayLoginComponent } from 'src/app/display-login/display-login.component';
// import { DisplayProfilesComponent } from 'src/app/display-profiles/display-profiles.component';


@NgModule({
  declarations: [ LoginComponent, DisplayLoginComponent, ],
  imports: [ CommonModule, HttpClientModule, FormsModule ],
  exports: [ LoginComponent,DisplayLoginComponent,]
})
export class LoginModule { }