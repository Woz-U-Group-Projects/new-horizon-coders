import { Component, OnInit, Input } from '@angular/core';
import { Staff } from '../models/staff';



@Component({
  selector: 'app-display-profiles',
  templateUrl: './display-profiles.component.html',
  styleUrls: ['./display-profiles.component.css']
})
export class DisplayProfilesComponent implements OnInit {
  @Input() staff: Staff;
 

  constructor() { }

  ngOnInit() {
  }

}