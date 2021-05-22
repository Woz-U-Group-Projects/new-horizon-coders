import { Component, Input, OnInit } from '@angular/core';
import { AppointmentsService } from "../appointments.service";
import { Appointments } from "../models/appointments";


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})




export class AppointmentsComponent implements OnInit {

  constructor(private appointmentsService: AppointmentsService) { }
  newAppointment: Appointments = new Appointments();
  appointments: Appointments[] = [];

  getAppointments() {
    this.appointmentsService.getAppointments().subscribe(appointments => (this.appointments = appointments));
  }
  addAppointments() {
    this.appointmentsService.addAppointments(this.newAppointment).subscribe(result => {
      this.getAppointments();
      this.newAppointment = new Appointments();
    });
  }


  

//create update & delete functions to complete CRUD

  ngOnInit() {
    this.getAppointments();
  }
  

}
