import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Signup } from "./models/signup";

@Injectable({
    providedIn: "root"
  })
  export class SignupService {
  
    // Express will use port 3001
    apiUrl: string = "http://localhost:3001/signup";
  
    constructor(private http: HttpClient) {}
  
    getSignup(): Observable<Signup[]> {
        return this.http.get<Signup[]>(this.apiUrl);
    }

    addSignup(task): Observable<Signup> {
      return this.http.post<Signup>(this.apiUrl, task);
    }
  
  }
  