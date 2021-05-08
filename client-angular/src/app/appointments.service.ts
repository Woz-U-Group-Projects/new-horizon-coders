import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Appointments } from "./models/appointments";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  
  apiUrl: string = "http://localhost:3001/appointments";

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(this.apiUrl);
  }

  addAppointments(appointments): Observable<Appointments> {
    return this.http.post<Appointments>(this.apiUrl, appointments);
  }

  //create update and delete functions to complete CRUD
}

