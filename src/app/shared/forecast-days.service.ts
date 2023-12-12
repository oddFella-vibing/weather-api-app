import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForecastDaysService {
  constructor() {}
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  date = new Date();
  todayIndex = this.date.getDay();
  today = this.daysOfWeek[this.todayIndex];

  getDays() {
    const nextFiveDays: string[] = [];
    for (let j = 1; j <= 5; j++) {
      if (j + this.todayIndex <= 6) {
        nextFiveDays.push(this.daysOfWeek[this.todayIndex + j]);
      } else {
        nextFiveDays.push(this.daysOfWeek[this.todayIndex + j - 7]);
      }
    }
    return nextFiveDays;
  }
}
