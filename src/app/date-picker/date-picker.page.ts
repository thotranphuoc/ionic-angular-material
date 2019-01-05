import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.page.html',
  styleUrls: ['./date-picker.page.scss'],
})
export class DatePickerPage implements OnInit {
  myDate: any;
  constructor() { }

  ngOnInit() {
    this.myDate = new Date();
  }

}
