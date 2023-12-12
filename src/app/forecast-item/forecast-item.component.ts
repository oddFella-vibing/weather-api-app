import { Component, Input, OnInit } from '@angular/core';

import { forecastData } from '../forecastData';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css'],
})
export class ForecastItemComponent implements OnInit {
  @Input() day = '';
  @Input() forecast: forecastData = {
    temperature: '',
    weather_description: '',
  };
  constructor() {}
  ngOnInit(): void {}
}
