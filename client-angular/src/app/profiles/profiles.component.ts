import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Staff } from '../../app/models/staff'


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  private profilesRoute = 'http://localhost:3001/staff';
   public staff: Staff[] = [];
 
  
  constructor( private http: HttpClient) { }



  getStaff(){
    this.http.get<Staff[]>(this.profilesRoute).subscribe(staff => {
      this.staff = staff;
      console.log("Staff", this.staff);

    });
  }

  ngOnInit() {
    this.getStaff();
  }

}
