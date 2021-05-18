import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "./models/login";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {

  // Express will use port 3001
  apiUrl: string = "http://localhost:3001/login";

  constructor(private http: HttpClient) {}

  getLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(this.apiUrl);
  }

  addLogin(login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, login);
  }

  //create update and delete functions to complete CRUD
}