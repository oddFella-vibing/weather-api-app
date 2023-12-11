import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForecastDaysService {
  constructor() {}
  daysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];
  date = new Date();
  todayIndex = this.date.getDay();
  today = this.daysOfWeek[this.todayIndex];
  nextFiveDays = [this.daysOfWeek[this.todayIndex + 1],
  this.daysOfWeek[this.todayIndex + 2],
  this.daysOfWeek[this.todayIndex + 3],
  this.daysOfWeek[this.todayIndex + 4],
  this.daysOfWeek[this.todayIndex + 5]
];
  getDays() {
    return this.nextFiveDays;
  }
}
