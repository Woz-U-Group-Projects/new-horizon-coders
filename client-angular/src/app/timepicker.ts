import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-timepicker-basic',
  templateUrl: './appointments/appointments.component.html'
})
export class NgbdTimepickerBasic {
  time = {hour: 12, minute: 30};
}