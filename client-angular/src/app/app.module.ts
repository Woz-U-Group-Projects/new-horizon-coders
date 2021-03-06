import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskDisplayComponent } from "./task-display/task-display.component";
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentsService } from "./appointments.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerBasic } from './datepicker';
import { NgbdTimepickerBasic } from './timepicker';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AppComponent, TaskDisplayComponent, AppointmentsComponent, NgbdDatepickerBasic, NgbdTimepickerBasic, SignupComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgbModule,],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
