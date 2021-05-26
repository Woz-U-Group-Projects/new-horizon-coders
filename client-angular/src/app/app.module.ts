import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { LoginModule } from './modules/login/login.module';


import { AppComponent } from "./app.component";

import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentsService } from "./appointments.service";
import { StoreComponent } from './store/store.component';
import { SignupComponent } from './signup/signup.component';



import { NgbdDatepickerBasic } from './datepicker';
import { NgbdTimepickerBasic } from './timepicker';
// import { DisplayLoginComponent } from './display-login/display-login.component';
// import { DisplayProfilesComponent } from './display-profiles/display-profiles.component'




@NgModule({
  declarations: [AppComponent, AppointmentsComponent, NgbdDatepickerBasic, NgbdTimepickerBasic, StoreComponent,SignupComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgbModule, ProfilesModule,LoginModule  ],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
