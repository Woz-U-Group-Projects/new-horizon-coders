import {Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar,} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './appointments/appointments.component.html'
})
export class NgbdDatepickerBasic {

  model: NgbDateStruct;
  date: {year: number, month: number, today: number};

  constructor(private calendar: NgbCalendar) {
  }

  ngOnInit() {
    this.model = this.calendar.getToday();
 }
}

//   selectToday() {
//     this.model = this.calendar.getToday();
//   }
// }